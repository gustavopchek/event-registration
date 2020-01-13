@extends('admin.layouts.layout')

@section('title', 'Alterar Senha')

@section('content')
    <div class="row">
        <div class="col s12 m10 offset-m1 l8 offset-l2 card-panel">
            {!! Form::model($user, ['method' => 'PATCH', 'class' => 'form-horizontal', 'route' => ['account.password']]) !!}
                <fieldset class="center">
                    <legend>Alterar senha</legend>
                    <div class="row">
                        <div class="input-field col s12">
                            {!! Form::label('email', 'E-mail', ['class' => 'control-label']) !!}
                            {!! Form::text('email', $user->email, ['class' => 'form-control', 'disabled']) !!}
                        </div>
                        <div class="input-field col s12">
                            {!! Form::label('name', 'Nome', ['class' => 'control-label']) !!}
                            {!! Form::text('name', null, ['class' => 'form-control', 'disabled']) !!}
                        </div>
                        <div class="input-field col s12">
                            {!! Form::label('current_password', 'Senha Atual', ['class' => 'control-label']) !!}
                            {!! Form::password('current_password', ['class' => 'form-control']) !!}
                        </div>
                        <div class="input-field col s12 m6">
                            {!! Form::label('password', 'Nova Senha', ['class' => 'control-label']) !!}
                            {!! Form::password('password', ['class' => 'form-control']) !!}
                        </div>
                        <div class="input-field col s12 m6">
                            {!! Form::label('password_confirmation', 'Confirmar Nova Senha', ['class' => 'control-label']) !!}
                            {!! Form::password('password_confirmation', ['class' => 'form-control']) !!}
                        </div>
                    </div>
                    {!! Form::submit('Salvar alterações', ['class' => 'btn btn-success']) !!}
                    <a href="{{ route('admin.home.index') }}" class="btn btn-warning">Retornar</a>
                </fieldset>
            {!! Form::close() !!}

        </div>
    </div>
@endsection