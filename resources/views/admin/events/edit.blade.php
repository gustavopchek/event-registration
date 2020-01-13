@extends('admin.layouts.layout')

@section('title', 'Editar Evento')

@section('content')
    <div class="row">
        <div class="col s12 m10 offset-m1 l8 offset-l2 card-panel">
            {!! Form::model($event, ['method' => 'PATCH', 'class' => 'form-horizontal', 'files' => 'true', 'route' => ['admin.events.update', $event->id]]) !!}
                <fieldset class="center">
                    <legend>Editar evento</legend>                  
                    @include('admin.events.form')
                </fieldset>
            {!! Form::close() !!}

        </div>
    </div>
@endsection