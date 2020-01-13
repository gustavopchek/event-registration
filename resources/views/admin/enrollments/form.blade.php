
<div class="input-field col s12">
    {!! Form::text('name', null, ['class' => '']) !!}
    {!! Form::label('name', 'Nome', ['class' => '']) !!}
</div>
<div class="input-field col s12">
    {!! Form::text('code', null, ['class' => '', 'length' => "15"]) !!}
    {!! Form::label('code', 'Código', ['class' => '']) !!}
</div>
<div class="col s12">
    <br>
    <small>OBS.: O código deve ter até 15 caracteres. Você pode optar pela criação automática do código deixando este campo em branco.</small>
</div>
<div class="input-field col s6">
     <input id="date_event" name="date_event" type="date" class="datepicker">
     {!! Form::label('date_event', 'Data do Evento', ['class' => '']) !!}
</div>
<div class="input-field col s6">
    {!! Form::text('time_event', null, ['class' => '']) !!}
    {!! Form::label('time_event', 'Hora do Evento', ['class' => '']) !!}
</div>
<div class="input-field col s6">
     <input id="date_start_enrollment" name="date_start_enrollment" type="date" class="datepicker">
     {!! Form::label('date_start_enrollment', 'Data de Início das Inscrições', ['class' => '']) !!}
</div>
<div class="input-field col s6">
    {!! Form::text('time_start_enrollment', null, ['class' => '']) !!}
    {!! Form::label('time_start_enrollment', 'Hora de Início das Inscrições', ['class' => '']) !!}
</div>
<div class="input-field col s6">
     <input id="date_end_enrollment" name="date_end_enrollment" type="date" class="datepicker">
     {!! Form::label('date_end_enrollment', 'Data de Término das Inscrições', ['class' => '']) !!}
</div>
<div class="input-field col s6">
    {!! Form::text('time_end_enrollment', null, ['class' => '']) !!}
    {!! Form::label('time_end_enrollment', 'Hora de Término das Inscrições', ['class' => '']) !!}
</div>
<div class="input-field col s12">
    {!! Form::textarea('description', null, ['class' => '']) !!}
    {{-- {!! Form::label('description', 'Descrição', ['class' => '']) !!} --}}
</div>
<div class="col s12">
    <br>
    {!! Form::submit('Salvar alterações', ['class' => 'btn btn-small']) !!}
    <a href="{{ route('admin.events.index') }}" class="btn btn-warning">Retornar</a>
</div>