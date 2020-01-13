<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use App\Participant;
use App\City;
use App\State;

class AddCityIdToParticipants extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        DB::statement('ALTER TABLE participants CHANGE city city_text VARCHAR(200)');
        DB::statement('ALTER TABLE participants CHANGE state state_text VARCHAR(200)');

        Schema::table('participants', function ($table) {

            $table->integer('city_id')->unsigned()->nullable();
            $table->foreign('city_id')->references('id')->on('cities');
            
        });

        $participants = Participant::all();

        foreach($participants as $key => $participant){
            $state = \App\State::where('abbreviation', '=', $participant->state_text)->first();
            echo $state;
            if($state){
                $city = $state->cities()->where('name', '=', $participant->city_text)->first();
                if($city){
                    $participant->city_id = $city->id;
                    echo $participant->save();
                }
            }
            
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('ALTER TABLE participants CHANGE city_text city VARCHAR(200)');
        DB::statement('ALTER TABLE participants CHANGE state_text state VARCHAR(200)');

        Schema::table('participants', function ($table) {
            $table->dropForeign(['city_id']);
            $table->dropColumn('city_id');
        });
    }
}
