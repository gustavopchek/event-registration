<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    /**
     * Get the State related to the City.
     */
    public function state()
    {
        return $this->belongsTo('App\State');
    }
}
