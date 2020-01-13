@extends('admin.layouts.layout')

@section('title', 'Visualizar Evento')

@section('content')
    <div class="row show" style="background-color: #fff">
        <div class="col s12 m10 offset-m1 l8 offset-l2">


            <h2>Evento: {{ $event->name }}</h2>
            <p>ID: {{ $event->id }}</p>
            <p>Código: {{ $event->code }}</p>
            <p>Data e hora do evento: {{ $event->event_datetime }}</p>
            <p>Data e hora de início das inscrições {{ $event->start_enrollment }}</p>
            <p>Data e hora de término das inscrições {{ $event->end_enrollment }}</p>
            <br>
            <div>
                {{ $event->description }}
            </div>
            <hr>

            <a href="{{ route('admin.events.edit', $event->id) }}" class="btn btn-primary">Editar</a>
            <a href="{{ route('admin.events.index') }}" class="btn btn-warning">Retornar</a>
            {!! Form::open([
                'method' => 'DELETE',
                'route' => ['admin.events.destroy', $event->id]
            ]) !!}
                {!! Form::submit('Excluir', ['class' => 'btn red']) !!}
            {!! Form::close() !!}
        </div>
    </div>
@stop