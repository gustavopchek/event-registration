<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\MessageReceived;

use App\Http\Controllers\Controller;

class ContactController extends Controller
{

    /**
     * Display the contact page.
     *
     * @return Response
     */
    public function index()
    {
        return view('contact.index');
    }

    /**
     * Display the participant contact page.
     *
     * @return Response
     */
    public function participant()
    {
    	$participant = \Auth::user();
        return view('contact.participant')->withParticipant($participant);
    }


	/**
     * Email the contact request
     *
     * @param Request $request
     * @return Redirect
     */
    public function sendMail(Request $request)
    {
        $result2 = $request->validate([
			'name' => 'required',
			'email' => 'required|email',
			'subject' => 'required',
			'message' => 'required',
			// 'g-recaptcha-response' => 'required|captcha',
		]);



		$data = $request->only('name', 'email', 'subject', 'message');
		$result = true;
		try {
			Mail::to(ENV('MAIL_TO'))->send(new MessageReceived($data));
		} catch (\Exception $e) {
			\Log::error($e->getMessage());
			$result = false;
		}

		if($result){
			return redirect()->back()->with('status', 'Mensagem enviada com sucesso.');
		}
		else{
			return redirect()->back()->withErrors('Erro ao enviar mensagem. Tente novamente mais tarde.');
		}

    }	

}