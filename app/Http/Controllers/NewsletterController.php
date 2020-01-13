<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Newsletter;

class NewsletterController extends HomeController
{

    public function subscribe(Request $request)
    {

        $this->validate($request, [
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'required|email',
        ]);

        $result = Newsletter::subscribeOrUpdate($request->email, ['FNAME' => $request->firstname, 'LNAME' => $request->lastname]);

        if($result && $result['status'] == "subscribed"){
            return \Response::json(['subscribe' => array('result' => '1', 'message' => 'Inscrito com sucesso.')]);
        }
        else{
            $current = \Newsletter::getMember($request->email);
            if($current['status'] == 'subscribed'){
                return \Response::json(['subscribe' => array('result' => '0', 'message' => 'Você já foi inscrito anteriormente.')]);
            }else{
                return \Response::json(['subscribe' => array('result' => '0', 'message' => 'Não foi possÃível se inscrever. Verifique o preenchimento do formulário.')]);
            }
            
            return redirect()->back();
        }
    }


}