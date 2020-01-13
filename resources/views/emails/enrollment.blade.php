@component('mail::message')
# Inscrição Atualizada

Sua inscrição no evento {{ $event }} foi atualizada para: **{{ $status }}**.

@component('mail::panel')
	{{ $description }}
@endcomponent

@component('mail::table')
|                     |              |
| -------------------:|:-------------|
| **Evento**:&nbsp;     | {{ $event }}  |
| **Data**:&nbsp; | {{ $date }} |
| **Hora**:&nbsp;   | {{ $time }} |
@endcomponent



> <small>Este e-mail foi enviado automaticamente e não deve ser respondido. [Acesse sua conta](https://eventos.cmvida.com.br/login) para mais detalhes.
</small>
@endcomponent
