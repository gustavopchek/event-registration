@extends('admin.layouts.layout')

@section('title', 'Editar Administrador')

@section('content')
    <div class="row">
        <div class="col s12 m10 offset-m1 l8 offset-l2 card-panel">
            {!! Form::model($admin, ['method' => 'PATCH', 'class' => 'form-horizontal', 'route' => ['admin.admins.update', $admin->id]]) !!}
                <fieldset class="center">
                    <legend>Editar usuário</legend>
                    @include('admin.admins.form')
                </fieldset>
            {!! Form::close() !!}

        </div>
    </div>
@endsection