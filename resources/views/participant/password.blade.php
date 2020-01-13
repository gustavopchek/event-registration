@extends('layouts.layout')

@section('title', 'Alterar Senha')

@section('content')
    <div class="row">
        <div class="col s12 m10 offset-m1 l8 offset-l2 center-align">
            {!! Form::model($admin, ['method' => 'PATCH', 'class' => 'form-horizontal', 'route' => ['participant.password']]) !!}
                <h3>Alterar Senha</h3>

                <div class="input-field col s12 m10 offset-m1 l8 offset-l2">
                    {!! Form::password('current_password', ['class' => 'form-control'.($errors->has('current_password') ? ' validate invalid' : '')]) !!}
                    {!! Form::label('current_password', 'Senha Atual', ['class' => '', 'data-error' => $errors->has('current_password') ? $errors->first('current_password') : '']) !!}
                </div>
                
                <div class="input-field col s12 m10 offset-m1 l8 offset-l2">
                    {!! Form::password('password', ['class' => 'form-control'.($errors->has('password') ? ' validate invalid' : '')]) !!}
                    {!! Form::label('password', 'Senha', ['class' => '', 'data-error' => $errors->has('password') ? $errors->first('password') : '']) !!}
                </div>

                <div class="input-field col s12 m10 offset-m1 l8 offset-l2">
                    {!! Form::password('password_confirmation', ['class' => 'form-control'.($errors->has('password_confirmation') ? ' validate invalid' : '')]) !!}
                    {!! Form::label('password_confirmation', 'Confirmar Senha', ['class' => '', 'data-error' => $errors->has('password_confirmation') ? $errors->first('password_confirmation') : '']) !!}
                </div>
                {!! Form::submit('Salvar alterações', ['class' => 'btn btn-success']) !!}
                <a href="{{ route('admin.home.index') }}" class="btn btn-warning">Retornar</a>
            {!! Form::close() !!}

        </div>
    </div>
@endsection