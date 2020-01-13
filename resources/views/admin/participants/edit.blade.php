@extends('admin.layouts.layout')

@section('title', 'Editar Participante')

@section('content')
    <div class="row">
        <div class="col s12 m10 offset-m1 l8 offset-l2 card-panel">
            {!! Form::model($participant, ['method' => 'PATCH', 'class' => 'form-horizontal', 'route' => ['admin.participants.update', $participant->id]]) !!}
                <fieldset class="center">
                    <legend>Editar Participante</legend>
                    @include('admin.participants.form')
                </fieldset>
            {!! Form::close() !!}

        </div>
    </div>
    <script>
        var state_id = '{{$participant->city->state->id}}';
        var city_id = '{{$participant->city->id}}';
    </script>
@endsection