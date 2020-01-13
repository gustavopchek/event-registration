@component('mail::message')
# Mensagem Recebida

Você recebeu uma mensagem pelo site da {{ config('app.name') }}:

@component('mail::table')
|                     |              |
| -------------------:|:-------------|
| **Nome**:&nbsp;     | {{ $name }}  |
| **E-mail**:&nbsp;   | {{ $email }} |
| **Assunto**:&nbsp; | {{ $subject }} |
@endcomponent

@component('mail::panel')
	@foreach ($messageLines as $messageLine)
		{{ $messageLine }}<br />
	@endforeach
@endcomponent

@component('mail::button', ['url' => 'mailto:'. $email])
Responder via e-mail
@endcomponent



> <small>Este e-mail foi enviado automaticamente e não deve ser respondido. Para enviar uma mensagem ao remetente, clique no botão acima ou envie um e-mail para {{ $email }}.</small>
@endcomponent
