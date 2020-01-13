@extends('admin.layouts.layout')

@section('title', 'Adicionar Participante')

@section('content')
    <div class="row">
        <div class="col s12 m10 offset-m1 l8 offset-l2 card-panel">
            {!! Form::open(['route' => 'admin.participants.store', 'class' => 'form-horizontal']) !!}
                <fieldset class="center">
                    <legend>Adicionar Participante</legend>
                    @include('admin.participants.form')
                </fieldset>
            {!! Form::close() !!}

        </div>
    </div>
@endsection