@extends('layouts.layout')

@section('title', 'Cadastro')

@section('content')
    <div class="row">
        <div class="col s12 m10 offset-m1 l8 offset-l2 card-panel">
            {!! Form::open(['route' => 'contact.participant.send', 'class' => 'form-horizontal']) !!}
                <fieldset class="center">
                    <legend>Contato</legend>
                    <div class="input-field col s12">
                        {!! Form::text('name', $participant->name, ['class' => '']) !!}
                        {!! Form::label('name', 'Nome', ['class' => '']) !!}
                    </div>
                    <div class="input-field col s12">
                        {!! Form::email('email', $participant->email, ['class' => 'validate']) !!}
                        {!! Form::label('email', 'E-mail', ['class' => '', 'data-success' => '', 'data-error' => 'Email inválido']) !!}
                    </div>
                    <div class="input-field col s12">
                        {!! Form::text('subject', null, ['class' => '']) !!}
                        {!! Form::label('subject', 'Assunto', ['class' => '']) !!}
                    </div>
                    <div class="input-field col s12">
                        {!! Form::textarea('message', null, ['class' => 'materialize-textarea']) !!}
                        {!! Form::label('message', 'Mensagem', ['class' => '']) !!}
                    </div>
                    <div class="col s12">
                        <br>
                        {!! Form::submit('Enviar Mensagem', ['class' => 'btn btn-small']) !!}
                        <a href="{{ route('home.index') }}" class="btn btn-warning">Retornar</a>
                    </div>
                </fieldset>
            {!! Form::close() !!}

        </div>
    </div>
@endsection