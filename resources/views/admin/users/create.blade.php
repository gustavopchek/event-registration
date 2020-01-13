@extends('admin.layouts.layout')

@section('title', 'Novo Usuário')

@section('content')
    <div class="row">
        <div class="col s12 m10 offset-m1 l8 offset-l2 card-panel">
            {!! Form::open(['route' => 'admin.users.store', 'class' => 'form-horizontal']) !!}
                <fieldset class="center">
                    <legend>Novo usuário</legend>
                    <div class="row">
                        <div class="input-field col s12">
                            {!! Form::text('email', null, ['class' => '', '']) !!}
                            {!! Form::label('email', 'E-mail', ['class' => '']) !!}
                        </div>
                        <div class="input-field col s12">
                            {!! Form::text('name', null, ['class' => '']) !!}
                            {!! Form::label('name', 'Nome', ['class' => '']) !!}
                        </div>
                        <div class="input-field col s12">
                            {!! Form::password('password', ['class' => '']) !!}
                            {!! Form::label('password', 'Senha', ['class' => '']) !!}
                        </div>
                        <div class="input-field col s12">
                            {!! Form::password('password_confirmation', ['class' => '']) !!}
                            {!! Form::label('password_confirmation', 'Confirmar Senha', ['class' => '']) !!}
                        </div>

                        
                        <div class="col s12">
                          {!! Form::checkbox('admin', null, false, ['id' => 'admin', 'class' => 'filled-in']) !!}
                          <label for="admin">Administrator Geral</label>
                        </div>
                        &nbsp;<small class="pull-left">Administradores gerais podem criar ou excluir outros usuários.</small>
                            
                    </div>
                    {!! Form::submit('Salvar alterações', ['class' => 'btn btn-small']) !!}
                    <a href="{{ route('admin.users.index') }}" class="btn btn-warning">Retornar</a>
                </fieldset>
            {!! Form::close() !!}

        </div>
    </div>
@endsection