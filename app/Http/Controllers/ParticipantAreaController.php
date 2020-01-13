<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class ParticipantAreaController extends Controller
{

    public function __construct()
    {
        // $this->middleware('auth', ['except' => ['notification', 'paymentReturn', 'paymentVerification']]);
    }

}
