<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use App\Mail\EnrollmentUpdated;

use Pagseguro;

class EnrollmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $enrollments = \App\Enrollment::orderBy('id','DESC')->paginate(20);
        return view('admin.enrollments.index', ['enrollments' => $enrollments]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return redirect()->back();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return redirect()->back();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        // $credentials = \PagSeguro::credentials()->get();

        $enrollment = \App\Enrollment::findOrFail($id);
        $status = \App\Status::pluck('name', 'id');

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

        
        return view('admin.enrollments.edit', ['enrollment' => $enrollment, 'status' => $status, 'transaction_data' => $transaction_data]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $enrollment = \App\Enrollment::findOrFail($id);

        $this->validate($request, [
            'status_id' => 'required',
        ]);

        $input = [
            'status_id' => $request->status_id,
        ];

        $enrollment->fill($input)->save();

        \Session::flash('status', 'Status alterado com sucesso.');

        if($request->notify){
            $data = [
                'email' => $enrollment->participant->email,
                'event' => $enrollment->event->name,
                'date' => $enrollment->event->getEventDate(),
                'time' => $enrollment->event->getEventTime(),
                'status' => $enrollment->status->name,
                'description' => $enrollment->status()->get()->first()->description
            ];

            $result = true;

            try {
                Mail::to($enrollment->participant->email)->send(new EnrollmentUpdated($data));
            } catch (\Exception $e) {
                \Log::error($e->getMessage());
                $result = false;
            }

            if($result){
                \Session::flash('status', 'Status alterado com sucesso e participante notificado por e-mail.');
            }
        }


        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
