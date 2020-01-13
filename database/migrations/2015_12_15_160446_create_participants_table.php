<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateParticipantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('participants', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('cpf');
            $table->string('nationality');
            // $table->char('gender', ['male', 'female']);
            $table->char('gender', 1);
            // $table->enum('member', ['yes', 'no']);
            $table->boolean('member');
            $table->date('date_of_birth');
            $table->enum('marital_status', ['single', 'married', 'separated', 'divorced', 'widower', 'partner']);
            $table->string('phone');
            $table->string('phone2');
            $table->string('postal_code', 8);
            $table->string('street');
            $table->string('number');
            $table->string('complement');
            $table->string('district');
            $table->string('city');
            $table->string('state', 2);
            $table->string('email')->unique();
            $table->string('password', 60);
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('participants');
    }
}
