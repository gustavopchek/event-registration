<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use PagSeguro;
use Illuminate\Support\Facades\Mail;
use App\Mail\EnrollmentUpdated;

class EnrollmentController extends ParticipantAreaController
{
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $participant = \Auth::user();
        $enrollments = \App\Enrollment::where('participant_id', $participant->id)->orderBy('id','DESC')->get();

        return view('enrollments.index')->withEnrollments($enrollments);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($code)
    {
        $participant = \Auth::user();
        $enrollment = \App\Enrollment::where('code', $code)->firstOrFail();

        if($enrollment->participant_id != $participant->id){
             return redirect()->route('enrollments.index')->withErrors('Inscrição não encontrada.');
        }

        $updated_at = \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $enrollment->updated_at);
        $diff = $updated_at->diffInSeconds(\Carbon\Carbon::now());

        // $validPayment = true;

        // if($diff > 60){
        //     $validPayment = false;
        // }

        $remaining = 172800 - $diff;

        if($remaining > 60 && $remaining < 3600 ){
            $showDiff = round($remaining / 60) . ' minuto(s)';
        }elseif($remaining >= 3600 && $remaining){
            $showDiff = round($remaining / 3600) . ' hora(s)';
        }
        // elseif($remaining >= 86400 && $remaining){
        //     $showDiff = round($remaining / 86400) . ' dia(s)';
        // }
        else{
            $showDiff = $remaining . ' segundo(s)';
        }


        return view('enrollments.show', ['enrollment' => $enrollment, 'diff' => $diff, 'showDiff' => $showDiff]);
    }


    public function checkout(Request $request){

        $participant = \Auth::user();
        $enrollment = \App\Enrollment::where('code', $request->code)->firstOrFail();
        

        if($enrollment->participant_id != $participant->id){
            // return redirect()->route('enrollments.index')->withErrors('Inscrição não encontrada.');
            abort(404);
        }elseif($enrollment->transaction_code != null && $enrollment->transaction_code != ''){
             return redirect()->route('enrollments.show', $enrollment->id)->withErrors('A transação já foi efetualda.');
        }

        $diff = $enrollment->updated_at->diffInSeconds(\Carbon\Carbon::now());

        if($diff > 172800){
            return redirect()->route('enrollments.show', $enrollment->id)->withErrors('O prazo para pagamento expirou.');
        }

        $states = \App\State::orderBy('name')->pluck('name','id');

        return view('enrollments.checkout')->withEnrollment($enrollment)->withStates($states);

    }

    public function submit(Request $request){

        // if (!isset($_SERVER['HTTP_X_REQUESTED_WITH']) || $_SERVER['HTTP_X_REQUESTED_WITH'] != 'XmlHttpRequest') {
        //     abort(403, 'Forbidden');
        // }

        $participant = \Auth::user();
        $enrollment = \App\Enrollment::where('code', $request->code)->firstOrFail();

        if($participant->id != $enrollment->participant->id){
            abort(404);
        }elseif($enrollment->transaction_code != null && $enrollment->transaction_code != ''){
             return redirect()->route('enrollments.show', $enrollment->id)->withErrors('A transação já foi efetualda.');
        }

        $diff = $enrollment->updated_at->diffInSeconds(\Carbon\Carbon::now());

        if($diff > 172800){
            return redirect()->route('enrollments.show', $enrollment->id)->withErrors('O prazo para pagamento expirou.');
        }

        $messages = [
            'date_format' => 'Deve estar no formato dd/mm/aaaa',
            'digits' => 'Deve conter :digits dígitos',
            'in' => 'Selecione um :attribute válido',
            'required' => 'É obrigatório',
            'required_if' => 'É obrigatório',
            'between' => 'Deve estar entre :min e :max'
        ];


        $input = $request->all();

        $rules = [
            'payment_type' => 'required|in:credit_card,online_debit',
            'sender_hash' => 'required',

            'same_address' => 'required',
            'street' => 'required_if:same_address,0',
            'number' => 'required_if:same_address,0',
            'district' => 'required_if:same_address,0',
            'postal_code' => 'required_if:same_address,0',
            'city_id' => 'required_if:same_address,0',
            'state_id' => 'required_if:same_address,0',

            'same_holder' => 'required_if:payment_type,credit_card',
            'card_token' => 'required_if:payment_type,credit_card',
            'credit_card_holder_name' => 'required_if:payment_type,credit_card',
            'credit_card_holder_phone' => 'required_if:payment_type,credit_card',
            'credit_card_holder_cpf' => 'required_if:payment_type,credit_card',
            'credit_card_holder_date_of_birth' => 'required_if:payment_type,credit_card',
            'card_token' => 'required_if:payment_type,credit_card',
            'installments' => 'required_if:payment_type,credit_card',
            'installment_value' => 'required_if:payment_type,credit_card',
            // 'price' => array('required', 'regex:/^\d*(\.\d{2})?$/'),
            // 'spaces' => 'required'
            'bank_name' => 'required_if:payment_type,online_debit'
        ];


        if($request->same_address == "0"){
            $rules['postal_code'] .= '|digits: 8';
            $rules['city_id'] .= '|integer';
            $rules['state_id'] .= '|integer';
        }

        if($request->payment_type == "credit_card"){
            $rules['installments'] .= '|numeric|between:1,'.$enrollment->event->getMaxInstallments();
            $rules['same_holder'] .= '|in:0,1';
            $rules['credit_card_holder_cpf'] .= '|digits:11';
            $rules['credit_card_holder_date_of_birth'] .= '|date_format:"d/m/Y"';
            
        }

        // return response()->json(['result' => false, 'errors' => $input], 422);

        $validator = \Validator::make($input, $rules, $messages);

        if ($validator->fails()) {
           return response()->json(['result' => false, 'errors' => $validator->errors()], 422);
        }

        $result = false;
        $errorCode = "";
        $errorMessage = "";

        try {
            // Set participant info
            $pagseguro = PagSeguro::setReference($enrollment->code)
            ->setSenderInfo([
              'senderName' => $participant->name, //Deve conter nome e sobrenome
              'senderPhone' => $participant->phone, //Código de área enviado junto com o telefone
              'senderEmail' => $participant->email,
              'senderHash' => $request->sender_hash,
              'senderCPF' => $participant->cpf
            ]);

            if($request->same_address){
                $pagseguro->setBillingAddress([
                  'billingAddressStreet' => $enrollment->participant->street,
                  'billingAddressNumber' => $enrollment->participant->number,
                  'billingAddressDistrict' => $enrollment->participant->district,
                  'billingAddressPostalCode' => $enrollment->participant->postal_code,
                  'billingAddressCity' => $enrollment->participant->city->name,
                  'billingAddressState' => $enrollment->participant->city->state->abbreviation
                ]);
            }else{
                $city = "";
                $state = \App\State::find($request->state_id)->first();
                if($state){
                    $city = \App\City::find($request->city_id)->first();
                }
                $pagseguro->setBillingAddress([
                  'billingAddressStreet' => $request->street,
                  'billingAddressNumber' => $request->number,
                  'billingAddressDistrict' => $request->district,
                  'billingAddressPostalCode' => $request->postal_code,
                  'billingAddressCity' => $city ? $city->name : null,
                  'billingAddressState' => $state ? $state->abbreviation : null
                ]);
            }

            $pagseguro->setItems([
              [
                'itemId' => $enrollment->event->code,
                'itemDescription' => 'Inscrição: ' . $enrollment->event->name,
                'itemAmount' => $enrollment->event->price, //Valor unitário
                'itemQuantity' => '1', // Quantidade de itens
              ]
            ]);



            // Select payment type
            if($request->payment_type == "credit_card"){
                $pagseguro->setCreditCardHolder([
                  'creditCardHolderName' => $request->credit_card_holder_name, //Deve conter nome e sobrenome
                  'creditCardHolderPhone' => $request->credit_card_holder_phone, //Código de área enviado junto com o telefone
                  'creditCardHolderCPF' => $request->credit_card_holder_cpf, //Ou CNPJ se for Pessoa Júridica
                  'creditCardHolderBirthDate' => $request->credit_card_holder_date_of_birth,
                ]);


                $result = $pagseguro->send([
                  'paymentMethod' => 'creditCard',
                  'creditCardToken' => $request->card_token,
                  'installmentQuantity' => $request->installments,
                  'installmentValue' => $request->installment_value,
                ]);
            }elseif($request->payment_type == "online_debit"){
                $result = $pagseguro->send([
                  'paymentMethod' => 'eft',
                  'bankName' => $request->bank_name
                ]);
            }else{
                return \Response::json(['result' => false, 'errors' => null], 422);
            }
        }catch(\Artistas\PagSeguro\PagSeguroException $e) {
            $errorCode = $e->getCode(); //codigo do erro
            $errorMessage = $e->getMessage(); //mensagem do erro
        }

        $errors = [];      


        if($result){
            $enrollment->transaction_code = $result->code;
            $enrollment->save();
            
            return \Response::json(['result' => true, 'errors' => [], 'redirectUrl' => route('enrollments.success', $enrollment->code)]);
        }else{
            switch ($errorCode) {
                case 53017:
                    $errors['general'] = "O CPF cadastrado em sua conta é inválido. Entre em contato com o administrador.";
                    break;
                case 53044:
                    $errors['credit_card_holder_name'] = "É inválido";
                    break;
                case 53046:
                    $errors['credit_card_holder_cpf'] = "É inválido";
                    break;
                case 53048:
                    $errors['credit_card_holder_birth_date'] = "É inválido";
                    break;
                case 53052 :
                    $errors['credit_card_holder_phone'] = "É inválido";
                    break;
                  
                default:
                    $errors['general'] = 'Erro ao processar pagamento. Verifique o preenchimento do formulário. Se o problema persistir, entre em contato com um administrador.';
                    break;
            } 
            return response()->json(['result' => false, 'errors' => $errors], 422);

        } 


        // if($result){
        //     $enrollment->transaction_code = $result->code;
        //     $enrollment->save();
        // }else{
        //     return redirect()->back()->withErrors('Ocorreu um problema ao processar o pagamento. Verifique se todas as informações estão corretas.');
        // }

        // \Session::flash('status', 'Transação realizada com sucesso. Aguarde a confirmação pelo PagSeguro.');

        // return view('enrollments.success')->withEnrollment($enrollment)->withTransactionId($result->code);
    


    }


    public function generatePayment(Request $request){

        $participant = \Auth::user();
        $enrollment = \App\Enrollment::findOrFail($request->enrollment_id);

        if($enrollment->participant_id != $participant->id){
             return redirect()->route('enrollments.index')->withErrors('Inscrição não encontrada.');
        }

        $event = $enrollment->event()->get()->first();
        $participant = $enrollment->participant()->get()->first();
        $status = $enrollment->status()->get()->first();

        if($event->getStartEnrollment()->isFuture()){
            return redirect()->back()->withErrors('Não foi possível gerar o link de pagamento.');
        }elseif($event->getEndEnrollment()->isPast()){
            return redirect()->back()->withErrors('Não foi possível gerar o link de pagamento.');
        }

        $data = [
            'maxAge' => '172800',
            'items' => [
                [
                    'id' => $enrollment->id,
                    'description' => 'Inscricao no evento ' . $event->name,
                    'quantity' => '1',
                    'amount' => $event->price,
                    'weight' => '0',
                    'shippingCost' => null,
                    'width' => '0',
                    'height' => '0',
                    'length' => '0',
                ],
            ],
            // 'shipping' => [
            //     'address' => [
            //         'shippingType' => 3,
            //         'postalCode' => $participant->cep,
            //         // 'postalCode' => '85040220',
            //         'street' => $participant->street,
            //         // 'street' => 'Rua Coroados',
            //         'number' => $participant->number,
            //         // 'number' => '931',
            //         'complement' => $participant->complement,
            //         // 'complement' => '',
            //         'district' => $participant->district,
            //         // 'district' => 'Vila Carli',
            //         'city' => $participant->city,
            //         // 'city' => 'Guarapuava',
            //         'state' => $participant->state,
            //         // 'state' => 'SP',
            //         'country' => 'BRA',
            //     ],

            // ],
            // 'sender' => [
            //     'name' => $participant->name,
            //     'documents' => [
            //         'number' => '50857285130',
            //         'type' => 'CPF',
            //     ],
            //     'email' => $participant->email,
            //     'phone' => '4299060182'
            // ],
        ];

        $paymentRequest = \PagSeguro::checkout()->createFromArray($data);


        $credentials = \PagSeguro::credentials()->get();

        $information = $paymentRequest->send($credentials);

        if($information){
            $code = $information->getCode();
        }

        if($code){
            $input = [
                'payment_code' => $code
            ];

            $enrollment->fill($input)->save();

            \Session::flash('status', 'Link de pagamento gerado com sucesso.');

            return redirect()->back();
        }

    }

    /**
     * Shows the form to cancel enrollemnt.
     *
     * @return \Illuminate\Http\Response
     */
    public function getCancel($code)
    {

        $enrollment = \App\Enrollment::where('code', $code)->firstOrFail();
        $participant = \Auth::user();

        if($enrollment->participant_id != $participant->id){
            return redirect()->route('enrollments.index')->withErrors('Inscrição não encontrada.');
        }elseif($enrollment->transaction_code != null && $enrollment->transaction_code != ''){
            return redirect()->route('enrollments.show', $enrollment->id)->withErrors('Não é possível cancelar manualmente uma inscrição que já possui uma transação de pagamento.');
        }

        return view('enrollments.cancel')->withEnrollment($enrollment);

    }

    /**
     * Cancells the enrollment
     *
     * @return \Illuminate\Http\Response
     */
    public function patchCancel(Request $request)
    {

        $enrollment = \App\Enrollment::findOrFail($request->enrollment_id);
        $participant = \Auth::user();

        if($enrollment->participant_id != $participant->id){
            return redirect()->route('enrollments.index')->withErrors('Inscrição não encontrada.');
        }elseif($enrollment->transaction_code != null && $enrollment->transaction_code != ''){
            return redirect()->route('enrollments.show', $enrollment->id)->withErrors('Não é possível cancelar manualmente uma inscrição que já possui uma transação de pagamento.');
        }

        if(!\Hash::check($request->password, \Auth::user()->password)){
            return redirect()->back()->withErrors('Senha informada incorretamente.');
        }

        if($enrollment->status()->get()->first()->code == "cancelled"){
            return redirect()->back()->withErrors('Esta inscrição já está cancelada.');
        }else{
            $cancelledStatus = \App\Status::where('code', 'cancelled')->first();

            $input = [
                'status_id' => $cancelledStatus->id,
            ];

            $enrollment->fill($input)->save();

            \Session::flash('status', 'Inscrição cancelada com sucesso.');

            return redirect()->route('home.index');

        } 

        return view('enrollments.cancel')->withEnrollment($enrollment);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function paymentVerification()
    {
        $enrollments = \App\Enrollment::where('transaction_code', '')->where('status_id', '2')->orderBy('id','DESC')->get();

        foreach ($enrollments as $enrollment) {
           $updated_at = \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $enrollment->updated_at);
            $diff = $updated_at->diffInSeconds(\Carbon\Carbon::now());

            if($diff > 172800){
            
                //if($enrollment->event->getEndEnrollment()->isFuture()){
            
                    $newSystemStatus = \App\Status::where('code', 'cancelled')->first();

                    if($newSystemStatus){
                        $enrollment->status_id = $newSystemStatus->id;
                        $enrollment->save();

                        $data = [
                        'email' => $enrollment->participant->email,
                        'event' => $enrollment->event->name,
                        'date' => $enrollment->event->getEventDate(),
                        'time' => $enrollment->event->getEventTime(),
                        'status' => $enrollment->name,
                        'description' => $enrollment->status()->get()->first()->description
                        ];

                        // $result = \Mail::send('emails.enrollment', $data, function ($message) use ($data) {
                        //   $message->subject('Inscrição Cancelada')
                        //           ->to($data['email'])
                        //           ->sender(env('MAIL_USERNAME'));
                        // });

                        echo "Enrollment Verified";
                        echo "<br>";
                    }
                //}

            }
        }

        exit;

    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function paymentReturn()
    {

        $transaction_id = \Request::get('transaction_id');

        $credentials = \PagSeguro::credentials()->get();

        if(!$credentials){
            echo "Erro"; exit;
        }

        $email = $credentials->getEmail();
        $token = $credentials->getToken();


        $url = "https://ws.pagseguro.uol.com.br/v2/transactions/".$transaction_id."?email=".$email."&token=".$token;

        $content = null;

        try {
            $content = file_get_contents($url);
        } catch (\Exception $e) {
            // echo $e->getMessage();
        }

        $xml = simplexml_load_string($content);

        if($xml){

            $transaction_code = $xml->code;

            foreach ($xml->items->item as $item) {
                $enrollment_id = $item->id;
            }

            $enrollment = \App\Enrollment::findOrFail($enrollment_id);

            $input = [
                'transaction_code' => $transaction_code
            ];

            $enrollment->fill($input)->save();

        }else{
            echo "Erro"; exit;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function notification(Request $request)
    {

        $result = PagSeguro::notification($request->notificationCode, $request->notificationType);

        if(!$result){
            echo "Erro"; exit;
        }

        // $reference = $result->reference;


        if($result){

            $enrollment = \App\Enrollment::where('code', $result->reference)->firstOrFail();

            $systemStatus = $enrollment->status->code;

            $transaction_code = $result->code;

            if(empty($enrollment->transaction_code)){
                 $input = [
                    'transaction_code' => $transaction_code
                ];

                $enrollment->fill($input)->save();
            }


            if($systemStatus == "suspended" || $systemStatus == "cancelled"){
                return $systemStatus;
            }

            // Status
            // 1 - Aguardando pagamento
            // 2 - Em análise
            // 3 - Paga
            // 4 - Disponível
            // 5 - Em disputa
            // 6 - Devolvida
            // 7 - Cancelada

            $status = $result->status;

            $newSystemStatus = "";

            if($status == 1 || $status == 2 || $status == 5){
                if($systemStatus != "pending"){
                    $newSystemStatus = \App\Status::where('code', 'pending')->first();
                }
            }

            if($status == 3 || $status == 4){
                if($systemStatus != "confirmed"){
                    $newSystemStatus = \App\Status::where('code', 'confirmed')->first();
                }
            }

            if($status == 6 || $status == 7){
                if($systemStatus != "cancelled"){
                    $newSystemStatus = \App\Status::where('code', 'cancelled')->first();
                }
            }
            

            if($newSystemStatus){
                $enrollment->status_id = $newSystemStatus->id;
                $enrollment->save();

                $data = [
                    'email' => $enrollment->participant->email,
                    'event' => $enrollment->event->name,
                    'date' => $enrollment->event->getEventDate(),
                    'time' => $enrollment->event->getEventTime(),
                    'status' => $enrollment->status->name,
                    'description' => $enrollment->status()->get()->first()->description
                ];


                try {
                    Mail::to($enrollment->participant->email)->send(new EnrollmentUpdated($data));
                } catch (\Exception $e) {
                    \Log::error($e->getMessage());
                }

                return $newSystemStatus->code;
            }

            return ''; exit;
            

        }else{
            abort(400, 'Error');
        }
    }

    /**
     * Displays the Success Page
     *
     * @return \Illuminate\Http\Response
     */
    public function success($code)
    {

        $participant = \Auth::user();
        $enrollment = \App\Enrollment::where('code', $code)->firstOrFail();

        $transaction_data = null;

        if($enrollment->transaction_code){


            $email = config('pagseguro.email', env('PAGSEGURO_EMAIL', ''));
            $token = config('pagseguro.token', env('PAGSEGURO_TOKEN', ''));
            $sandbox = config('pagseguro.sandbox', env('PAGSEGURO_SANDBOX', true));

            $uri = $sandbox ? "https://ws.sandbox.pagseguro.uol.com.br/v3/transactions/" : "https://ws.pagseguro.uol.com.br/v3/transactions/";


            $url = $uri.$enrollment->transaction_code."?email=".$email."&token=".$token;

            $content = null;

            try {
                $content = file_get_contents($url);
            } catch (\Exception $e) {
                // echo $e->getMessage();
            }

            $transaction_data = simplexml_load_string($content);

        }

        if($enrollment->participant_id != $participant->id){
             return redirect()->route('enrollments.index')->withErrors('Inscrição não encontrada.');
        }

        if($enrollment->status()->get()->first()->code == "cancelled"){
            return redirect()->route('home.index')->withErrors('Esta inscrição já está cancelada.');
        }

        return view('enrollments.success', ['enrollment' => $enrollment, 'transaction_data' => $transaction_data]);
    }


}
