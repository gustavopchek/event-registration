<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class EnrollmentUpdated extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * The message parameters
     */
    // @var String
    public $email;
    // @var String
    public $event;
    // @var String
    public $date;
    // @var String
    public $time;
    // @var String
    public $status;
    // @var String
    public $description;


    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->email = $data['email'];
        $this->event = $data['event'];
        $this->date = $data['date'];
        $this->time = $data['time'];
        $this->status = $data['status'];
        $this->description = $data['description'];
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Inscrição Atualizada')->markdown('emails.enrollment');
    }
}
