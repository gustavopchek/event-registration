@extends('layouts.layout')

@section('title', 'Página Principal')

@section('content')
<div class="container">
    @if($recentEvents->isEmpty() && $events->isEmpty())
        <h4>Nenhum evento disponível</h4>
    @endif
    @if(!$events->isEmpty())
    <div id="events" class="row">
        <h2>Próximos Eventos</h2>
        @foreach($events as $event)
        <div class="col s12 m6 l4">
            <div class="card">
                @if($event->imagepath)
                <div class="card-image" style="height: 200px; width: 100%; background: url({{asset($event->imagepath)}}); background-size: cover; background-position: center;">

                </div>
                @else
                <div class="card-image" style="height: 200px; width: 100%; background: url({{asset('images/logo.png')}}); background-size: auto; background-position: center; background-repeat: no-repeat">

                </div>
                @endif
                <div class="card-content">
                    <span class="card-title black-text">{{ $event->name }}</span>
                    <br>
                    <div>
                        <i class="material-icons" style="display: block; float: left;">date_range</i> &nbsp;<span>
                        {{ $event->getEventDate() }}
                    </span>
                </div>
                <div>
                    <i class="material-icons" style="display: block; float: left;">access_time</i> &nbsp;<span>{{ $event->getEventTime() }}</span>
                </div>
            </div>
            <div class="card-action center-align">
                @if ($event->remainingSlots() <= 0)
                <p>Vagas Esgotadas</p>
                @elseif ($event->getStartEnrollment()->isPast() && $event->getEndEnrollment()->isFuture())
                <br>
                <small>Inscrições abertas até {{ $event->getEndEnrollmentDate() }} {{ $event->getEndEnrollmentTime() }}</small>
                @elseif ($event->getEndEnrollment()->isPast())
                Inscrições Encerradas
                @else
                Inscrições abrem em {{ $event->getStartEnrollmentDate() }} {{ $event->getStartEnrollmentTime() }}
                @endif
                <br>
                <a href="{{ route('events.enroll', $event->code) }}" class="btn white-text">Ver Evento</a>
            </div>
        </div>
    </div>
    @endforeach
</div>
@endif
@if(!$recentEvents->isEmpty())
<div class="row">
    <h3>Eventos Recentes</h3>
    @foreach($recentEvents as $recentEvent)
    <div class="col s12 m6 l4">
        <div class="card">
            @if($recentEvent->imagepath)
                <div class="card-image" style="height: 200px; width: 100%; background: url({{asset($recentEvent->imagepath)}}); background-size: cover; background-position: center;">

                </div>
            @else
                <div class="card-image" style="height: 200px; width: 100%; background: url({{asset('images/logo.png')}}); background-size: auto; background-position: center; background-repeat: no-repeat">

                </div>
            @endif
            <div class="card-content">
                <span class="card-title black-text">{{ $recentEvent->name }}</span>
                <br>
                <div>
                    <i class="material-icons" style="display: block; float: left;">date_range</i> &nbsp;<span>
                    {{ $recentEvent->getEventDate() }}
                </span>
            </div>
            <div>
                <i class="material-icons" style="display: block; float: left;">access_time</i> &nbsp;<span>{{ $recentEvent->getEventTime() }}</span>
            </div>
        </div>
        <div class="card-action center-align">
            @if ($recentEvent->remainingSlots() <= 0)
            <p>Vagas Esgotadas</p>
            @elseif ($recentEvent->getStartEnrollment()->isPast() && $recentEvent->getEndEnrollment()->isFuture())
            <br>
            <small>Inscrições abertas até {{ $recentEvent->getEndEnrollmentDate() }} {{ $recentEvent->getEndEnrollmentTime() }}</small>
            @elseif ($recentEvent->getEndEnrollment()->isPast())
            Inscrições Encerradas
            @else
            Inscrições abrem em {{ $recentEvent->getStartEnrollmentDate() }} {{ $recentEvent->getStartEnrollmentTime() }}
            @endif
            <br>
            <a href="{{ route('events.enroll', $recentEvent->id) }}" class="btn white-text">Ver Evento</a>
        </div>
    </div>
@endforeach
</div>
@endif
</div>

@endsection