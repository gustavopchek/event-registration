@extends('layouts.layout')

@section('title', $event->name . ' - Inscrição')

@section('content')
    <div class="row">
        <div class="col s12 m10 offset-m1 l8 offset-l2 card-panel">
            
            <div class="row">
                <div class="col s12">
                    <h2>{{ $event->name }}</h2>
                    <small>(cód: {{ $event->code }})</small>
                    <p><b>Valor</b>: R$ {{ number_format($event->price, 2, ',', '') }}</p>
                    <table class="table bordered">
                        <tr>
                            <th>Evento</th>
                            <th>Início das Inscrições</th>
                            <th>Término das Inscrições</th>
                        </tr>
                        <tr>
                            <td>
                                <i class="material-icons" style="display: block; float: left;">date_range</i> &nbsp;
                                <span>
                                    {{ $event->getEventDate() }}
                                </span>
                            </td>
                            <td>
                                <i class="material-icons" style="display: block; float: left;">date_range</i> &nbsp;
                                <span>
                                    {{ $event->getStartEnrollmentDate() }}
                                </span>
                            </td>
                            <td>
                                <i class="material-icons" style="display: block; float: left;">date_range</i> &nbsp;
                                <span>
                                    {{ $event->getEndEnrollmentDate() }}
                                </span>
                            </td>
                        </tr>
                                                <tr>
                            <td>
                                <i class="material-icons" style="display: block; float: left;">access_time</i> &nbsp;
                                <span>
                                    {{ $event->getEventTime() }}
                                </span>
                            </td>
                            <td>
                                <i class="material-icons" style="display: block; float: left;">access_time</i> &nbsp;
                                <span>
                                    {{ $event->getStartEnrollmentTime() }}
                                </span>
                            </td>
                            <td>
                                <i class="material-icons" style="display: block; float: left;">access_time</i> &nbsp;
                                <span>
                                    {{ $event->getEndEnrollmentTime() }}
                                </span>
                            </td>
                        </tr>
                    </table>
                    <br>
                    @if($event->imagepath)
                        <div class="center-align">
                            <img src="{{asset($event->imagepath)}}" style="max-width: 100%">
                        </div>
                        <br>
                    @endif
                    <div>
                        {!! $event->description !!}
                    </div>
                    <hr>
                </div>
            </div>

            @if($event->remainingSlots() > 0 && $event->getStartEnrollment()->isPast() && $event->getEndEnrollment()->isFuture() && $currentEnrollmentCode == null)
                <div class="row">
                    <div class="col s12">
                        <h3>Confirme seus dados para a inscrição</h3>
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
                        <p><b>Cidade</b>: {{ $participant->city->name }}</p>
                        <p><b>Estado</b>: {{ $participant->city->state->name }}</p>
                        <br>
                        <p>Caso alguma informação esteja errada, <a href="{{ route('participant.account') }}">atualize seus dados</a> antes de se inscrever.</p>
                    </div>
                </div>
                <hr>
            @endif

            

            <div class="row">
                <div class="col s12">
                    @if ($event->remainingSlots() <= 0)
                        <p>As vagas para este evento estão esgotadas.</p>
                    @elseif ($event->getStartEnrollment()->isFuture())
                        <p>Inscrições abrem em {{ $event->getStartEnrollmentDate() }} {{ $event->getStartEnrollmentTime() }}</p>
                    @elseif ($event->getEndEnrollment()->isPast())
                        <p>Inscrições encerradas</p>
                        <a href="{{ route('login') }}" class="btn btn-warning">Retornar</a>
                    @elseif ($currentEnrollmentCode)
                        <p>Você já está inscrito neste evento. <a href="{{ route('enrollments.show', $currentEnrollmentCode) }}">Clique aqui</a> para ver os dados da sua inscrição.</p>
                    @else
                        {!! Form::open(['route' => 'events.createEnrollment', 'class' => 'form-horizontal']) !!}
                            {!! Form::hidden('event_id', $event->id, ['class' => '']) !!}
                            <div class="col s12">
                                <br>
                                {!! Form::submit('Confirmar Inscrição', ['class' => 'btn btn-small']) !!}
                                <a href="{{ route('login') }}" class="btn btn-warning">Retornar</a>
                            </div>
                        {!! Form::close() !!}
                    @endif
                </div>
            </div>

        </div>
    </div>
    <hr>
@endsection