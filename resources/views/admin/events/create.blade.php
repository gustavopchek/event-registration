@extends('admin.layouts.layout')

@section('title', 'Novo Evento')

@section('content')
    <div class="row">
        <div class="col s12 m10 offset-m1 l8 offset-l2 card-panel">
            {!! Form::open(['route' => 'admin.events.store', 'class' => 'form-horizontal', 'files' => 'true']) !!}
                <fieldset class="center">
                    <legend>Novo evento</legend>
                    @include('admin.events.form')
                </fieldset>
            {!! Form::close() !!}

        </div>
    </div>
@endsection