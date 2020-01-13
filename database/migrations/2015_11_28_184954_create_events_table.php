<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 100);
            $table->string('code', 15)->unique();
            $table->timestamp('start_enrollment');
            $table->timestamp('end_enrollment');
            $table->timestamp('event_datetime');
            $table->timestamp('end_event_datetime');
            $table->text('description');
            $table->decimal('price', 10,2);
            $table->smallInteger('spaces');
            $table->string('imagepath', 250);
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
        Schema::drop('events');
    }
}
