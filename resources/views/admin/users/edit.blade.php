@extends('admin.layouts.layout')

@section('title', 'Editar Usuário')

@section('content')
    <div class="row">
        <div class="col s12 m10 offset-m1 l8 offset-l2 card-panel">
            {!! Form::model($user, ['method' => 'PATCH', 'class' => 'form-horizontal', 'route' => ['admin.users.update', $user->id]]) !!}
                <fieldset class="center">
                    <legend>Editar usuário</legend>
                    @include('admin.users.form')
                </fieldset>
            {!! Form::close() !!}

        </div>
    </div>
@endsection