<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEnrollmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('enrollments', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('cpf');
            $table->string('date_of_birth');
            $table->enum('marital_status', ['single', 'married', 'separated', 'divorced', 'widower', 'partner']);
            $table->string('gender');
            $table->boolean('member');
            $table->string('phone');
            $table->string('postal_code', 8);
            $table->string('street');
            $table->string('number');
            $table->string('complement');
            $table->string('district');
            $table->string('city');
            $table->string('state', 2);
            $table->string('email');
            $table->decimal('price', 10,2);
            $table->string('payment_code');
            $table->string('transaction_code');
            $table->timestamps();
            $table->integer('participant_id')->unsigned();
            $table->foreign('participant_id')->references('id')->on('participants')->onUpdate('cascade')->onDelete('cascade');
            $table->integer('event_id')->unsigned();
            $table->foreign('event_id')->references('id')->on('events')->onUpdate('cascade')->onDelete('cascade');
            $table->integer('status_id')->unsigned();
            $table->foreign('status_id')->references('id')->on('statuses')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('enrollments');
    }
}
