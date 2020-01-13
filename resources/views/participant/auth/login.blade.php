@extends('layouts.layout')

@section('title', 'Login')


@section('content')
<div id="login" class="container">
     <div class="row">
        <div class="col s12 m10 offset-m1 l8 offset-l2">
            <div class="panel">
                <div class="panel-heading center-align">
                    <h2>Login</h2>
                </div>
                <div class="panel-body">
                    {!! Form::open(['route' => 'login', 'class' => 'form-horizontal', 'role' => 'form']) !!}
                        <div class="input-field col s12 m10 offset-m1 l8 offset-l2">
                            {!! Form::text('email', null, ['class' => 'form-control', 'type' => 'username']) !!}
                            {!! Form::label('email', 'E-mail', ['class' => '', 'data-success' => '', 'data-error' => 'Email inválido']) !!}
                        </div>
                        <div class="input-field col s12 m10 offset-m1 l8 offset-l2">
                            {!! Form::password('password', ['class' => 'form-control']) !!}
                            {!! Form::label('password', 'Senha', ['class' => '']) !!}
                        </div>
                       <!--  <div class="form-group">
                            <div class="l6 loffset-4">
                                <div class="checkbox">
                                <label>
                                    <input type="checkbox" name="remember"> {{ trans('validation.attributes.remember') }}
                                </label>
                                </div>
                            </div>
                        </div> -->
                        <div class="col s12 center-align">
                            <br>
                            {!! Form::submit('Login', ['class' => 'btn btn-small']) !!}
                            <a class="btn btn-small white grey-text text-darken-4" href="{{ route('participant.register') }}">Registrar</a>
                        </div>
                    {!! Form::close() !!}
                    <br>
                    <div class="col s12 center-align">
                        <br>
                        <a href="{{ route('password.email') }}">Esqueci a Senha</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
