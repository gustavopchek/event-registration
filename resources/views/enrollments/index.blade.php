@extends('layouts.layout')

@section('title', 'Minhas Inscrições')

@section('content')
    <div class="row">
        <div class="col s12 m10 offset-m1 l8 offset-l2">
            <div class="card-panel">
                <h2 class="card-title">
                    Minhas Inscrições
                </h2>
                <table class="highlight">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Evento</th>
                            <th>Status</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($enrollments as $enrollment)
                            <tr class="{{ $enrollment->status()->get()->first()->code }}">
                                <td>{{ $enrollment->id }}</td>
                                <td>{{ $enrollment->event()->get()->first()->name }}</td>
                                <td>{{ $enrollment->status()->get()->first()->name }}</td>
                                <td class="actions">
                                    <a href="{{ route('enrollments.show', $enrollment->code) }}" role="button" class="btn">
                                        <i class="material-icons md-18">visibility</i>
                                    </a>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
                <div class="card-action">
                    {{-- {!! $enrollments->render() !!} --}}
                </div>
            </div>
        </div>
    </div>
@endsection