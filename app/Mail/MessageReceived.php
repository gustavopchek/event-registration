<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class MessageReceived extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * The message parameters
     */
    // @var String
    public $name;
    // @var String
    public $subject;
    // @var String
    public $email;
    // @var String
    public $messageLines;


    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->name = $data['name'];
        $this->subject = $data['subject'];
        $this->email = $data['email'];
        $this->messageLines = explode("\n", $data['message']);
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Mensagem recebida')->markdown('emails.message');
    }
}
