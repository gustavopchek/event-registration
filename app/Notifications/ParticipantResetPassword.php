<?php

namespace App\Notifications;

use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\MailMessage;

class ParticipantResetPassword extends Notification
{
    /**
     * The password reset token.
     *
     * @var string
     */
    public $token;

    /**
     * Create a new notification instance.
     *
     * @param $token
     */
    public function __construct($token)
    {
        $this->token = $token;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        $subject = sprintf("[%s] %s", config('app.name'), "Recuperar Senha");

        return (new MailMessage)
            ->line('Você está recebendo este e-mail porque nós recebemos um pedido de recuperação de senha para a sua conta.')
            ->subject($subject)
            ->action('Resetar senha', route('password.new', $this->token))
            ->line('Se você não solicitou a recuperação de senha, nenhuma ação será necessária.');
    }
}
