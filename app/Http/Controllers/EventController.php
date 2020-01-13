<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class EventController extends ParticipantAreaController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function enroll($code)
    {

        $event = \App\Event::where('code', $code)->firstOrFail();
        $participant = \Auth::user();

        $currentEnrollments = $event->enrollments()->where('participant_id', $participant->id)->get();

        $currentEnrollmentCode = null;

        foreach ($currentEnrollments as $key => $currentEnrollment) {
            if($currentEnrollment->status()->get()->first()->code != "cancelled"){
                $currentEnrollmentCode = $currentEnrollment->code;
            }
        }

        return view('events.enroll', ['event' => $event, 'participant' => $participant, 'currentEnrollmentCode' => $currentEnrollmentCode]);
    }
    
    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function createEnrollment(Request $request)
    {

        $event = \App\Event::findOrFail($request->event_id);
        $participant = \Auth::user();

        if($event->remainingSlots() <= 0){
            return redirect()->back()->withErrors('As vagas para este evento estão esgotadas.');
        }

        if($event->getStartEnrollment()->isFuture()){
            return redirect()->back()->withErrors('O período de inscrição deste evento ainda não começou.');
        }elseif($event->getEndEnrollment()->isPast()){
            return redirect()->back()->withErrors('O período de inscrição deste evento já terminou.');
        }

        $currentEnrollments = $event->enrollments()->where('participant_id', $participant->id)->get();


        foreach ($currentEnrollments as $key => $currentEnrollment) {
            if($currentEnrollment->status()->get()->first()->code == "cancelled"){
                
            }else{
                return redirect()->back()->withErrors('Você já está inscrito neste evento. Sua inscrição está com o status "' . $currentEnrollment->status()->get()->first()->name . '". Para gerar outra inscrição, cancele a atual.');
            } 
        }

        $status = \App\Status::where('code', 'pending')->first();

        $input = [  
            'name' => $participant->name,
            'cpf' => $participant->cpf,
            'date_of_birth' => $participant->date_of_birth,
            'marital_status' => $participant->marital_status,
            'gender' => $participant->gender,
            'member' => $participant->member,
            'phone' => $participant->phone,
            'street' => $participant->street,
            'number' => $participant->number,
            'complement' => $participant->complement,
            'district' => $participant->district,
            'city' => $participant->city->name,
            'state' => $participant->city->state->abbreviation,
            'postal_code' => $participant->postal_code,
            'email' => $participant->email,
            'participant_id' => $participant->id,
            'event_id' => $event->id,
            'status_id' => $status->id,
            'code' => uniqid("i-"),
        ];

        $enrollment = new \App\Enrollment;

        $enrollment->fill($input);

        $enrollment->save();

        \Session::flash('status', 'Inscrição criada com sucesso.');

        return redirect()->route('enrollments.show', array($enrollment->code));
    }
    
}
