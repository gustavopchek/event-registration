<?php

namespace App\Http\Controllers\ParticipantAuth;

use App\Participant;
use Validator;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Auth;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new participants as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect participants after login / registration.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('participant.guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
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
    }

    /**
     * Create a new participant instance after a valid registration.
     *
     * @param  array  $data
     * @return Participant
     */
    protected function create(array $data)
    {
        return Participant::create([
            'name' => $data['name'],
            'cpf' => $data['cpf'],
            'date_of_birth' => \DateTime::createFromFormat('d/m/Y', $data['date_of_birth']),
            'marital_status' => $data['marital_status'],
            'gender' => $data['gender'],
            'member' => $data['member'],
            'phone' => $data['phone'],
            'street' => $data['street'],
            'number' => $data['number'],
            'complement' => $data['complement'],
            'district' => $data['district'],
            'city_id' => $data['city_id'],
            'postal_code' => $data['postal_code'],

            'email' => $data['email'],
            
            'password' => bcrypt($data['password'])
        ]);
    }

    /**
     * Show the application registration form.
     *
     * @return \Illuminate\Http\Response
     */
    public function showRegistrationForm()
    {
        $states = \App\State::orderBy('name')->pluck('name','id');
        return view('participant.auth.register')->withStates($states);
    }

    /**
     * Get the guard to be used during registration.
     *
     * @return \Illuminate\Contracts\Auth\StatefulGuard
     */
    protected function guard()
    {
        return Auth::guard('participant');
    }
}
