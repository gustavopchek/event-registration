@extends('admin.layouts.layout')

@section('title', 'Ver Administrador')

@section('content')
    <div class="row">
        <div class="col s12 m10 offset-m1 l8 offset-l2 card-panel">

            <fieldset class="center">
                <legend>Ver Administrador</legend>

                <div class="left-align">
                    <p>Nome: {{ $admin->name }}</h3>
                    <p>Administrador: {{ $admin->adminname }}</p>
                    <p>Id: {{ $admin->id }}</p>
<!--                     <p>Administrador Geral: {{{ $admin->admin == true ? 'sim' : 'não' }}}</p> -->
                    <hr>
                    </div>

                    <div class="actions">
                        <a href="{{ route('admin.admins.edit', $admin->id) }}" class="btn">Editar</a>
                        <a href="{{ route('admin.admins.index') }}" class="btn">Retornar</a>
                        {!! Form::open([
                            'method' => 'DELETE',
                            'route' => ['admin.admins.destroy', $admin->id]
                        ]) !!}
                            {!! Form::submit('Excluir', ['class' => 'btn red']) !!}
                        {!! Form::close() !!}
                    </div>
            </fieldset>
        </div>
    </div>
@stop