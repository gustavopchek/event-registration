<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ParticipantController extends Controller
{

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function account()
    {
        $participant = \Auth::user();

        $states = \App\State::orderBy('name')->pluck('name','id');

        return view('participant.account')->withParticipant($participant)->withStates($states);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  int  $id
     * @return Response
     */
    public function update(Request $request)
    {
        $participant = \Auth::user();

        $this->validate($request, [
            'name' => 'required',
            'date_of_birth' => 'required|date_format:"d/m/Y"',
            'marital_status' => 'required',
            'gender' => 'required|in:m,f',
            'member' => 'required|boolean',
            'phone' => 'required',
            'street' => 'required',
            'number' => 'required',
            'district' => 'required',
            'postal_code' => 'required|digits:8',
            'city_id' => 'required|integer'
        ]);

        $input = [
            'name' => $request->name,
            'date_of_birth' => \DateTime::createFromFormat('d/m/Y', $request->date_of_birth),
            'marital_status' => $request->marital_status,
            'gender' => $request->gender,
            'member' => $request->member,
            'phone' => $request->phone,
            'street' => $request->street,
            'number' => $request->number,
            'complement' => $request->complement,
            'district' => $request->district,
            'city_id' => $request->city_id,
            'postal_code' => $request->postal_code
        ];


        $participant->fill($input)->save();

        \Session::flash('status', 'Informações atualizadas com sucesso.');

        return redirect()->route('participant.account');
    }

    /**
     * Show the form for editing the admin's password.
     *
     * @return Response
     */
    public function editPassword()
    {
        $participant = \Auth::user();

        return view('participant.password')->withAdmin($participant);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  int  $id
     * @return Response
     */
    public function updatePassword(Request $request)
    {
        $admin = \Auth::user();

        $this->validate($request, [
            'current_password' => 'required',
            'password' => 'required|alpha_num|min:6|max:32',
            'password_confirmation' => 'required|min:6|max:32|same:password'
        ]);

        if(!\Hash::check($request->current_password, \Auth::user()->password)){
            return redirect()->back()->withErrors('Senha atual informada incorretamente.');
        }

        $input = [
            'password' => bcrypt($request->password)
        ];

        $admin->fill($input)->save();

        \Session::flash('status', 'Senha alterada com sucesso.');

        return redirect()->route('home.index');
    }
}
