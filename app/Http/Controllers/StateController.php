<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class StateController extends Controller
{
    public function cities($id)
    {
        $cities = \App\City::where('state_id', $id)->orderBy('name','ASC')->get();
            return \Response::json( $cities );
    }
}
