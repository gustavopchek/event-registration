@extends('admin.layouts.layout')

@section('title', 'Visualizar Evento')

@section('content')
    <div class="row show" style="background-color: #fff">
        <div class="col s12 m10 offset-m1 l8 offset-l2">

            <h2>{{ $event->name }}</h2>
            <div class="col s12 m6">
                
                <p><b>ID</b>: {{ $event->id }}</p>
                <p><b>Código</b>: {{ $event->code }}</p>
                <p><b>Vagas totais</b>: {{ $event->spaces }}</h2>
                <p><b>Vagas restantes</b>: {{ $event->remainingSlots() }}</h2>
                <p><b>Código</b>: {{ $event->code }}</p>
                <p><b>Valor</b>: R$ {{ number_format($event->price, 2, ',', '') }}</p>
            </div>
            @if($event->imagepath)
                <div class="col s12 m6">
                    <div class="center-align">
                        <img src="{{asset($event->imagepath)}}" style="max-width: 100%">
                    </div>
                    <br>
                </div>
            @endif
            <div class="clearfix"></div>
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
            <div>
                {!! $event->description !!}
            </div>
            <br>
            <table class="table bordered">
                <tr>
                    <th>Estatísticas</th>
                    <th></th>
                </tr>
                <tr>
                    <td>Inscrições Totais</td>
                    <td>{{ $event->enrollments()->count() }}</td>
                </tr>
                <tr class="green lighten-3">
                    <td>Confirmadas</td>
                    <td>{{ $event->confirmedEnrollments()->count() }}</td>
                </tr>
                <tr class="yellow lighten-3">
                    <td>Pendentes</td>
                    <td>{{ $event->pendingEnrollments()->count() }}</td>
                </tr>
                <tr class="red lighten-3">
                    <td>Canceladas</td>
                    <td>{{ $event->cancelledEnrollments()->count() }}</td>
                </tr>
                <tr class="orange lighten-3">
                    <td>Suspensas</td>
                    <td>{{ $event->suspendedEnrollments()->count() }}</td>
                </tr>
            </table>
            <hr>
            <h4>Relatório</h4>
            {!! Form::model($event, ['class' => 'form-horizontal', 'files' => 'true', 'route' => ['admin.events.reports', $event->id]]) !!}
                <div class="col s12 m3 left-align">

                    {!! Form::checkbox('status[]', 1, null, ['id' => 'confirmed', 'class' => 'filled-in']) !!}
                    {!! Form::label('confirmed', 'Confirmadas', ['class' => '']) !!}
                </div>
                <div class="col s12 m3 left-align">

                    {!! Form::checkbox('status[]', 2, null, ['id' => 'pending', 'class' => 'filled-in']) !!}
                    {!! Form::label('pending', 'Pendentes', ['class' => '']) !!}
                </div>
                <div class="col s12 m3 left-align">

                    {!! Form::checkbox('status[]', 3, null, ['id' => 'cancelled', 'class' => 'filled-in']) !!}
                    {!! Form::label('cancelled', 'Canceladas', ['class' => '']) !!}
                </div>
                <div class="col s12 m3 left-align">

                    {!! Form::checkbox('status[]', 4, null, ['id' => 'suspended', 'class' => 'filled-in']) !!}
                    {!! Form::label('suspended', 'Suspensas', ['class' => '']) !!}
                </div>
                <div class="col s12">
                    <br>
                    {!! Form::submit('Gerar Relatório', ['class' => 'btn btn-small']) !!}
                </div>
            {!! Form::close() !!}
            <div class="clearfix"></div>
            <br>
            <hr>
            <div class="card-panel">
                <h2 class="card-title">
                    Lista de Inscrições
                </h2>
                <table class="highlight">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Evento</th>
                            <th>Participante</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($enrollments as $enrollment)
                            <tr>
                                <td>{{ $enrollment->id }}</td>
                                <td>{{ $enrollment->event()->get()->first()->name }}</td>
                                <td>{{ $enrollment->participant()->get()->first()->name }}</td>
                                <td>{{ $enrollment->status()->get()->first()->name }}</td>
                                <td class="actions">
{{--                                 <a href="{{ route('admin.enrollments.show', $enrollment->id) }}" role="button" class="btn">
                                        <i class="material-icons md-18">visibility</i>
                                    </a> --}}
                                    <a href="{{ route('admin.enrollments.edit', $enrollment->id) }}" role="button" class="btn">
                                        <i class="material-icons md-18">edit</i>
                                    </a>

                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
                <div class="card-action">
                    {!! $enrollments->render() !!}
                </div>
            </div>

            <a href="{{ route('admin.events.edit', $event->id) }}" class="btn btn-primary">Editar</a>
            <a href="{{ route('admin.events.index') }}" class="btn btn-warning">Retornar</a>
        </div>
    </div>
@stop