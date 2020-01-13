@extends('admin.layouts.layout')

@section('title', 'Lista de Participantes')

@section('sidebar')
    @parent

    <p>This is appended to the master sidebar.</p>
@endsection

@section('content')

        <div class="col s12 m10 offset-m1 l8 offset-l2">
            <div class="card-panel">
                <h2 class="card-title">
                    Lista de Participantes
                </h2>
                <table class="highlight">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Título</th>
                            <th>E-mail</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($participants as $participant)
                            <tr>
                                <td>{{ $participant->id }}</td>
                                <td>{{ $participant->name }}</td>
                                <td>{{ $participant->email }}</td>
                                <td class="actions">
                                <a href="{{ route('admin.participants.show', $participant->id) }}" role="button" class="btn">
                                        <i class="material-icons md-18">visibility</i>
                                    </a>
                                    <a href="{{ route('admin.participants.edit', $participant->id) }}" role="button" class="btn">
                                        <i class="material-icons md-18">edit</i>
                                    </a>
                                    {!! Form::open([
                                        'method' => 'DELETE',
                                        'route' => ['admin.participants.destroy', $participant->id]
                                    ]) !!}
                                        <button type="submit" class="btn red" onclick="return confirm('Você realmente deseja excluir?')">
                                            <i class="material-icons md-18">delete</i>
                                        </button>
                                    {!! Form::close() !!}
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
                <div class="card-action">
                    <a href="{{ route('admin.participants.create') }}" role="button" class="btn green">
                        <i class="material-icons md-18">add</i>
                    </a>
                    {!! $participants->render() !!}
                </div>
            </div>
        </div>

@endsection