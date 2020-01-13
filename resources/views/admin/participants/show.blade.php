@extends('admin.layouts.layout')

@section('title', 'Visualizar Participante')

@section('content')
    <div class="row">
        <div class="col s12 m10 offset-m1 l8 offset-l2 card-panel">

            <fieldset class="center">
                <legend>Ver Participante</legend>

                <div class="left-align">
                    <p><b>Id</b>: {{ $participant->id }}</p>
                    <p><b>Nome</b>: {{ $participant->name }}</p>
                        <p><b>CPF</b>: {{ $participant->cpf }}</p>
                        <p><b>Data de Nascimento</b>: {{ $participant->date_of_birth }}</p>
                        <p><b>Estado Civil</b>: 
                            @if($participant->marital_status == "single")
                                Solteiro(a)
                            @elseif($participant->marital_status == "married")
                                Casado(a)
                            @elseif($participant->marital_status == "separed")
                                Separado(a)
                            @elseif($participant->marital_status == "divorced")
                                Divorciado(a)
                            @elseif($participant->marital_status == "widower")
                                Viúvo(a)
                            @elseif($participant->marital_status == "partner")
                                Companheiro(a)
                            @else
                                Outro
                            @endif
                        </p>
                        <p><b>Sexo</b>: {{{ $participant->gender == 'm' ? 'Masculino' : 'Feminino' }}}</p>
                        <p><b>Membro?</b>: {{{ $participant->member == true ? 'Sim' : 'Não' }}}</p>
                        <p><b>Telefone</b>: {{ $participant->phone }}</p>
                        <p><b>Rua</b>: {{ $participant->street }}</p>
                        <p><b>Número</b>: {{ $participant->number }}</p>
                        <p><b>Complemento</b>: {{ $participant->complement }}</p>
                        <p><b>Bairro</b>: {{ $participant->district }}</p>
                        <p><b>CEP</b>: {{ $participant->postal_code }}</p>
                        <p><b>Cidade</b>: {{ $participant->city }}</p>
                        <p><b>Estado</b>: {{ $participant->state }}</p>
                        <br>
                    <hr>
                    </div>

                    <div class="actions">
                        <a href="{{ route('admin.participants.edit', $participant->id) }}" class="btn">Editar</a>
                        <a href="{{ route('admin.participants.index') }}" class="btn">Retornar</a>
                        {!! Form::open([
                            'method' => 'DELETE',
                            'route' => ['admin.participants.destroy', $participant->id]
                        ]) !!}
                            {!! Form::submit('Excluir', ['class' => 'btn red']) !!}
                        {!! Form::close() !!}
                    </div>
            </fieldset>
        </div>
    </div>
@stop