<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class State extends Model
{
    /**
     * Get the cities related to the State.
     */
    public function cities()
    {
        return $this->hasMany('App\City');
    }
}
