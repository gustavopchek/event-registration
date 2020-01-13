@extends('layouts.layout')

@section('title', 'Cancelar Inscrição')

@section('content')
    <div class="row">
        <div class="col s12 m10 offset-m1 l8 offset-l2 card-panel">
            {!! Form::open(['route' => ['enrollments.cancel', $enrollment->id], 'class' => 'form-horizontal', 'method' => 'PATCH']) !!}
                <p>Confirmar cancelamento de inscrição:</p>
                <p><b>Evento</b>: {{ $enrollment->event()->get()->first()->name }}</p>
                <p><b>Status da inscrição:</b> {{ $enrollment->status()->get()->first()->name }}</p>
                <fieldset class="center">
{{--                     <div class="input-field col s12">
                        {!! Form::email('email', null, ['class' => 'validate']) !!}
                        {!! Form::label('email', 'E-mail', ['class' => '', 'data-success' => '', 'data-error' => 'Email inválido']) !!}
                    </div> --}}
                    {!! Form::hidden('enrollment_id', $enrollment->id, ['class' => '']) !!}
                    <div class="input-field col s12 m6 offset-m3">
                        {!! Form::password('password', null, ['class' => '']) !!}
                        {!! Form::label('password', 'Digite sua senha', ['class' => '']) !!}
                    </div>
                    <div class="col s12">
                        <br>
                        {!! Form::open([
                        'method' => 'PATCH',
                        'route' => ['enrollments.cancel', $enrollment->id]
                    ]) !!}
{{--                         <button type="submit" class="btn red" onclick="return confirm('Você realmente deseja excluir?')">
                            <i class="material-icons md-18">delete</i>
                        </button> --}}
                        {!! Form::submit('Cancelar Inscrição', ['class' => 'btn red', 'onclick' => 'return confirm("Você realmente deseja cancelar sua inscrição nesse evento?")']) !!}
                    {!! Form::close() !!}
                        <a href="{{ route('login') }}" class="btn btn-warning">Retornar</a>
                    </div>
                </fieldset>
            {!! Form::close() !!}

        </div>
    </div>
@endsection