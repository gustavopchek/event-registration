<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    /**
     * Fillable fields
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'code',
        'start_enrollment',
        'end_enrollment',
        'event_datetime',
        'end_event_datetime',
        'price',
        'spaces',
        'imagepath',
        'description',
        'manage_installments',
        'max_installments'
    ];

    public function getEventDatetime(){
        return \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $this->event_datetime);
    }

    public function getEventDate($format = null){
        return \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $this->event_datetime)->format($format ? $format : 'd/m/Y');
    }

    public function getEventTime(){
        return \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $this->event_datetime)->format('H:i');
    }

    public function getStartEnrollment(){
        return \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $this->start_enrollment);
    }

    public function getStartEnrollmentDate(){
        return \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $this->start_enrollment)->format('d/m/Y');
    }

    public function getStartEnrollmentTime(){
        return \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $this->start_enrollment)->format('H:i');
    }

    public function getEndEnrollment(){
        return \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $this->end_enrollment);
    }

    public function getEndEnrollmentDate(){
        return \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $this->end_enrollment)->format('d/m/Y');
    }

    public function getEndEnrollmentTime(){
        return \Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $this->end_enrollment)->format('H:i');
    }


    /**
     * Returns the max installments for credit card payments
     *
     * @return Integer
     */
    public function getMaxInstallments(){
         if($this->manage_installments){
            if($this->max_installments != null && $this->max_installments > 0){
                return $this->max_installments;
            }else{
                return $this->getEventDateTime()->diffInMonths(\Carbon\Carbon::now()) + 1;
            }
        }else{
            return 36;
        }
    }

    /**
     * Returns all enrollments from the event
     *
     * @return Enrollment[]
     */
    public function enrollments(){
        return $this->hasMany('App\Enrollment');
    }

    /**
     * Returns all confirmed enrollments from the event
     *
     * @return Enrollment[]
     */
    public function confirmedEnrollments(){
        return $this->hasMany('App\Enrollment')->where('status_id', 1);
    }

    /**
     * Returns all pending enrollments from the event
     *
     * @return Enrollment[]
     */
    public function pendingEnrollments(){
        return $this->hasMany('App\Enrollment')->where('status_id', 2);
    }

    /**
     * Returns all cancelled enrollments from the event
     *
     * @return Enrollment[]
     */
    public function cancelledEnrollments(){
        return $this->hasMany('App\Enrollment')->where('status_id', 3);
    }

    /**
     * Returns all suspended enrollments from the event
     *
     * @return Enrollment[]
     */
    public function suspendedEnrollments(){
        return $this->hasMany('App\Enrollment')->where('status_id', 4);
    }

    public function remainingSlots(){
        $enrollments = \App\Enrollment::where('event_id', $this->id)->get();
        $slots = $this->spaces;
        foreach ($enrollments as $key => $enrollment) {
            if($enrollment->status()->get()->first()->code != "cancelled"){
                $slots--;
            }
        }
        return $slots;
    }


}
