@extends('admin.layouts.layout')

@section('title', 'Configurações Gerais')

@section('sidebar')
    @parent

    <p>This is appended to the master sidebar.</p>
@endsection

@section('content')

    <div class="col s12 m10 offset-m1 l8 offset-l2">
        <div class="card-panel">
            <h2 class="card-title">
                Lista de Usuários
            </h2>
            <table class="highlight">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($users as $user)
                        <tr>
                            <td>{{ $user->id }}</td>
                            <td>{{ $user->email }}</td>
                            <td class="actions">
                                <a href="{{ route('admin.users.show', $user->id) }}" role="button" class="btn btn-default" title="Ver">
                                    <i class="material-icons md-18">visibility</i>
                                </a>
<!--                                 <a href="{{ route('admin.users.edit', $user->id) }}" role="button" class="btn" title="Editar">
                                    <i class="material-icons md-18">edit</i>
                                </a> -->
<!--                                 {!! Form::open([
                                    'method' => 'DELETE',
                                    'route' => ['admin.users.destroy', $user->id]
                                ]) !!}
                                    <button type="submit" class="btn red" onclick="return confirm('Você realmente deseja excluir?')" title="Excluir">
                                        <i class="material-icons md-18">delete</i>
                                    </button>
                                {!! Form::close() !!} -->
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
            <div class="card-action">
                <!-- <a href="{{ route('admin.users.create') }}" role="button" class="btn green btn-xs">
                    <i class="material-icons md-18">add</i>
                </a> -->
                {!! $users->render() !!}
            </div>
        </div>
    </div>

<!--     <div class="fixed-action-btn" style="bottom: 20px; right: 24px;">
        <a href="{{ route('admin.users.create') }}" class="btn-floating btn-medium waves-effect waves-light green"><i class="material-icons">add</i></a>
    </div> -->


@endsection