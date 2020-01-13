@extends('admin.layouts.layout')

@section('title', 'Ver Usuário')

@section('content')
    <div class="row">
        <div class="col s12 m10 offset-m1 l8 offset-l2 card-panel">

            <fieldset class="center">
                <legend>Ver Usuário</legend>

                <div class="left-align">
                    <p>E-mail: {{ $user->email }}</h3>
                    <p>Currículo cadastrado:
                        @if($user->curriculum)
                            <a href="{{ route('admin.curricula.show', $user->curriculum->id) }}">Ver currículo</a>
                        @else
                            <b>não</b>
                        @endif
                    </p>
                    <hr>
                    </div>

                    <div class="actions">
                        <!-- <a href="{{ route('admin.users.edit', $user->id) }}" class="btn">Editar</a> -->
                        <a href="{{ route('admin.users.index') }}" class="btn">Retornar</a>
<!--                         {!! Form::open([
                            'method' => 'DELETE',
                            'route' => ['admin.users.destroy', $user->id]
                        ]) !!}
                            {!! Form::submit('Excluir', ['class' => 'btn red']) !!}
                        {!! Form::close() !!} -->
                    </div>
            </fieldset>
        </div>
    </div>
@stop