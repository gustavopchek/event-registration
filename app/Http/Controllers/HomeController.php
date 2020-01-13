<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $events = \App\Event::whereDate('event_datetime' , '>=', date('Y-m-d H:i:s'))->orderBy('id','DESC')->paginate(10);
        // $recentEvents = \App\Event::whereDate('event_datetime' , '>=', date('Y-m-d H:i:s', strtotime("-1 week")))->whereDate('event_datetime' , '<', date('Y-m-d H:i:s'))->orderBy('id','DESC')->paginate(10);
        $recentEvents = collect();

        return view('home.index', ['events' => $events, 'recentEvents' => $recentEvents]);
    }
}
