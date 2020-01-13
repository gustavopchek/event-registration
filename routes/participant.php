<?php

Route::get('/home', function () {
    $participants[] = Auth::participant();
    $participants[] = Auth::guard()->participant();
    $participants[] = Auth::guard('participant')->participant();

    //dd($participants);

    return view('participant.home');
})->name('home');

