<?php

namespace App;

use App\Notifications\ParticipantResetPassword;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use App\Notifications\ResetPassword as ResetPasswordNotification;

class Participant extends Authenticatable
{
    use Notifiable;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'participants';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'cpf', 'date_of_birth', 'marital_status', 'gender', 'member', 'phone', 'street', 'number', 'complement', 'district', 'postal_code', 'city_text', 'state_text', 'email', 'password', 'city_id'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = ['password', 'remember_token'];

    /**
     * Overwrites the default date_of_birth
     */
    public function getDateOfBirthAttribute($date){
        return \Carbon\Carbon::createFromFormat('Y-m-d', $date)->format('d/m/Y');
    }

    /**
     * Returns the related enrollments
     * 
     * @return Enrollment[]
     */
    public function enrollments(){
        return $this->hasMany('App\Enrollment');
    }

    /**
     * Get the City related to the Job.
     */
    public function city()
    {
        return $this->belongsTo('App\City');
    }

    /**
    * @param string $token
    * @return void
    */
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new ParticipantResetPassword($token));
    }
}
