<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class ParticipantController extends Controller
{

    /**
     * Show the form for editing the participant's password.
     *
     * @return Response
     */
    public function editPassword()
    {
        $participant = \App\Participant::findOrFail($id);

        return view('admin.participants.password')->withParticipant($participant);
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
        $participant = \App\Participant::findOrFail($id);

        $this->validate($request, [
            'current_password' => 'required',
            'password' => 'required|alpha_num|min:6|max:32',
            'password_confirmation' => 'required|min:6|max:32|same:password'
        ]);

        if(!\Hash::check($request->current_password, \Auth::participant()->password)){
            return redirect()->back()->withErrors('Senha atual informada incorretamente.');
        }

        $input = [
            'password' => bcrypt($request->password)
        ];

        $participant->fill($input)->save();

        \Session::flash('status', 'Senha com sucesso.');

        return redirect()->back();
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $participants = \App\Participant::orderBy('id','DESC')->paginate(10);
        return view('admin.participants.index', ['participants' => $participants]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        $states = \App\State::orderBy('name')->pluck('name','id');
        return view('admin.participants.create')->withStates($states);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'date_of_birth' => 'required|date_format:"d/m/Y"',
            'cpf' => 'required|digits:11|unique:participants',
            'marital_status' => 'required',
            'gender' => 'required|in:m,f',
            'member' => 'required|boolean',
            'phone' => 'required',
            'street' => 'required',
            'number' => 'required',
            'district' => 'required',
            'postal_code' => 'required|digits:8',
            'city_id' => 'required|integer',

            'email' => 'required|email|unique:participants',
            'password' => 'required|alpha_num|min:6|max:32',
            'password_confirmation' => 'required|min:6|max:32|same:password'
        ]);
        $input = [
            'name' => $request->name,
            'email' => $request->email,
            'cpf' => $request->cpf,
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
            'postal_code' => $request->postal_code,
            
            'password' => bcrypt($request->password)

        ];


        \App\Participant::create($input);

        \Session::flash('status', 'Participante adicionado com sucesso.');

        return redirect()->route('admin.participants.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        $participant = \App\Participant::findOrFail($id);

        return view('admin.participants.show')->withParticipant($participant);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        $participant = \App\Participant::findOrFail($id);
        $states = \App\State::orderBy('name')->pluck('name','id');

        return view('admin.participants.edit')->withParticipant($participant)->withStates($states);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  int  $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        $participant = \App\Participant::findOrFail($id);

        $rules = [
            'name' => 'required',
            'date_of_birth' => 'required|date_format:"d/m/Y"',
            'cpf' => 'required|digits:11|unique:participants,cpf,'.$participant->id,
            'marital_status' => 'required',
            'gender' => 'required|in:m,f',
            'member' => 'required|boolean',
            'phone' => 'required',
            'street' => 'required',
            'number' => 'required',
            'district' => 'required',
            'postal_code' => 'required|digits:8',
            'city_id' => 'required|integer',

            'email' => 'required|email|unique:participants,email,'.$participant->id,
        ];

        if($request->password){
            $rules['password'] = 'alpha_num|min:6|max:32';
            $rules['password_confirmation'] = 'required|min:6|max:32|same:password';
        }

        $this->validate($request, $rules);

        $input = [
            'name' => $request->name,
            'email' => $request->email,
            'cpf' => $request->cpf,
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
            'postal_code' => $request->postal_code,
            'password' => bcrypt($request->password)
        ];

        $participant->fill($input)->save();

        \Session::flash('status', 'Participante atualizado com sucesso.');

        return redirect()->route('admin.participants.index');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy(Request $request, $id)
    {

        $participant = \App\Participant::findOrFail($id);

        $participant->delete();

        \Session::flash('status', 'Participante excluído com sucesso.');

        return redirect()->route('admin.participants.index');
    }
}
