@extends('admin.layouts.layout')

@section('title', 'Lista de Inscrições')

@section('sidebar')
    @parent

    <p>This is appended to the master sidebar.</p>
@endsection

@section('content')

        <div class="col s12 m10 offset-m1 l8 offset-l2">
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
                    <a href="{{ route('admin.enrollments.create') }}" role="button" class="btn green">
                        <i class="material-icons md-18">add</i>
                    </a>
                    {!! $enrollments->render() !!}
                </div>
            </div>
        </div>

@endsection