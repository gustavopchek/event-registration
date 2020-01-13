<div class="row">
    <div class="input-field col s12 tooltipped" data-position="top" data-delay="50" data-tooltip="O endereço de e-mail não pode ser modificado.">
        {!! Form::text('email', null, ['class' => '', 'disabled']) !!}
        {!! Form::label('email', 'E-mail', ['class' => '']) !!}
    </div>
    <div class="input-field col s12">
        {!! Form::text('name', null, ['class' => '']) !!}
        {!! Form::label('name', 'Nome', ['class' => '']) !!}
    </div>
    <div class="col s12">
      {!! Form::checkbox('admin', null, false, ['id' => 'admin', 'class' => 'filled-in']) !!}
      <label for="admin">Administrator Geral</label>
    </div>
    &nbsp;<small class="pull-left">Administradores gerais podem criar ou excluir outros usuários.</small>
        
</div>
{!! Form::submit('Salvar alterações', ['class' => 'btn btn-small']) !!}
<a href="{{ route('admin.users.index') }}" class="btn btn-warning">Retornar</a>