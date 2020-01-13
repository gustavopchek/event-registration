<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class StateController extends Controller
{
    public function cities($id)
    {
        $cities = \App\City::where('state_id', $id)->orderBy('name','ASC')->get();
            return \Response::json( $cities );
    }
}
