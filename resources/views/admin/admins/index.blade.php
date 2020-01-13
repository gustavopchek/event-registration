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
                Lista de Administradores
            </h2>
            <table class="highlight">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>E-mail</th>
                        <!-- <th>Admin Geral</th> -->
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($admins as $admin)
                        <tr>
                            <td>{{ $admin->id }}</td>
                            <td>{{ $admin->email }}</td>
                            <!-- <td><i class="material-icons md-18">{{{ $admin->admin == true ? 'check_circle' : 'cancel' }}}</i></td> -->
                            <td class="actions">
                                <a href="{{ route('admin.admins.show', $admin->id) }}" role="button" class="btn btn-default" title="Ver">
                                    <i class="material-icons md-18">visibility</i>
                                </a>
                                <a href="{{ route('admin.admins.edit', $admin->id) }}" role="button" class="btn" title="Editar">
                                    <i class="material-icons md-18">edit</i>
                                </a>
                                {!! Form::open([
                                    'method' => 'DELETE',
                                    'route' => ['admin.admins.destroy', $admin->id]
                                ]) !!}
                                    <button type="submit" class="btn red" onclick="return confirm('Você realmente deseja excluir?')" title="Excluir">
                                        <i class="material-icons md-18">delete</i>
                                    </button>
                                {!! Form::close() !!}
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
            <div class="card-action">
                <a href="{{ route('admin.admins.create') }}" role="button" class="btn green btn-xs">
                    <i class="material-icons md-18">add</i>
                </a>
                {!! $admins->render() !!}
            </div>
        </div>
    </div>

    <div class="fixed-action-btn" style="bottom: 20px; right: 24px;">
        <a href="{{ route('admin.admins.create') }}" class="btn-floating btn-medium waves-effect waves-light green"><i class="material-icons">add</i></a>
    </div>


@endsection