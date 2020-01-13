@extends('admin.layouts.layout')

@section('title', 'Lista de Eventos')

@section('sidebar')
    @parent

    <p>This is appended to the master sidebar.</p>
@endsection

@section('content')

        <div class="col s12 m10 offset-m1 l8 offset-l2">
            <div class="card-panel">
                <h2 class="card-title">
                    Lista de Eventos
                </h2>
                <table class="highlight">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Título</th>
                            <th>Código</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($events as $event)
                            <tr>
                                <td>{{ $event->id }}</td>
                                <td>{{ $event->name }}</td>
                                <td>{{ $event->code }}</td>
                                <td class="actions">
                                    <a href="{{ route('admin.events.show', $event->id) }}" role="button" class="btn">
                                        <i class="material-icons md-18">visibility</i>
                                    </a>
                                    <a href="{{ route('admin.events.edit', $event->id) }}" role="button" class="btn">
                                        <i class="material-icons md-18">edit</i>
                                    </a>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
                <div class="card-action">
                    <a href="{{ route('admin.events.create') }}" role="button" class="btn green">
                        <i class="material-icons md-18">add</i>
                    </a>
                    {!! $events->render() !!}
                </div>
            </div>
        </div>

@endsection