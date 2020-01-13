<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Enrollment extends Model
{
    protected $fillable = ['name', 'cpf', 'date_of_birth', 'marital_status', 'gender', 'member', 'phone', 'street', 'number', 'complement', 'district', 'postal_code', 'city', 'state', 'email', 'participant_id', 'event_id', 'status_id', 'payment_code', 'transaction_code', 'code'];


    /**
     * Returns the related event
     * 
     * @return Event
     */
    public function event(){
        return $this->belongsTo('App\Event');
    }

    /**
     * Returns the related participant
     * 
     * @return Participant
     */
    public function participant(){
        return $this->belongsTo('App\Participant');
    }

    /**
     * Returns the related status
     * 
     * @return Status
     */
    public function status(){
        return $this->belongsTo('App\Status');
    }

}
