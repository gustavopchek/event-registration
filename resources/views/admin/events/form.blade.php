<div class="row">   
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
    <div class="input-field col s12 m6">
         <input id="date_event" name="date_event" type="text" class="datepicker" value="{{ isset($event) ? $event->getEventDate() : null }}">
         {!! Form::label('date_event', 'Data do Evento', ['class' => '']) !!}
    </div>
    <div class="input-field col s12 m6">
        {!! Form::text('time_event', isset($event) ? $event->getEventTime() : null, ['class' => '']) !!}
        {!! Form::label('time_event', 'Hora do Evento', ['class' => '']) !!}
    </div>
    <div class="file-field input-field col s12">
        <div class="btn">
            <span>Imagem</span>
            {!! Form::file('image', ['class' => '']) !!}
        </div>
        <div class="file-path-wrapper">
            <input class="file-path validate" type="text">
          </div>
    </div>
    <div class="clearfix"></div>
    <div class="input-field col s6">
         <input id="date_start_enrollment" name="date_start_enrollment" type="text" class="datepicker" value="{{ isset($event) ? $event->getStartEnrollmentDate() : null }}">
         {!! Form::label('date_start_enrollment', 'Data de Início das Inscrições', ['class' => '']) !!}
    </div>
    <div class="input-field col s6">
        {!! Form::text('time_start_enrollment', isset($event) ? $event->getStartEnrollmentTime() : null, ['class' => '']) !!}
        {!! Form::label('time_start_enrollment', 'Hora de Início das Inscrições', ['class' => '']) !!}
    </div>
    <div class="input-field col s6">
         <input id="date_end_enrollment" name="date_end_enrollment" type="text" class="datepicker" value="{{ isset($event) ? $event->getEndEnrollmentDate() : null }}">
         {!! Form::label('date_end_enrollment', 'Data de Término das Inscrições', ['class' => '']) !!}
    </div>
    <div class="input-field col s6">
        {!! Form::text('time_end_enrollment', isset($event) ? $event->getEndEnrollmentTime() : null, ['class' => '']) !!}
        {!! Form::label('time_end_enrollment', 'Hora de Término das Inscrições', ['class' => '']) !!}
    </div>
    <div class="input-field col s12 m6">
        {!! Form::text('price', null, ['class' => '']) !!}
        {!! Form::label('price', 'Valor', ['class' => '']) !!}
    </div>
    <div class="input-field col s12 m6">
        {!! Form::text('spaces', null, ['class' => '']) !!}
        {!! Form::label('spaces', 'Vagas', ['class' => '']) !!}
    </div>
    <div class="col s12">
        <div class="col s12">
            Gerenciar Parcelas<br><small>(pagamentos com cartão de crédito)</small>:
        </div>
        <div class="col s6">
        {!! Form::radio('manage_installments', 1, false, ['id' => 'manage_installments-yes' ,'class' => '']) !!}
            <label for="manage_installments-yes">Sim</label>
        </div>
        <div class="col s6">
            {!! Form::radio('manage_installments', 0, true, ['id' => 'manage_installments-no' ,'class' => '']) !!}
            <label for="manage_installments-no">Não</label>
        </div>
    </div>
    <div class="clearfix"></div>
    <br>
    <div class="installments">
        <div class="input-field col s12 m4 l3" style="margin-top: 0;">
            {!! Form::text('max_installments', null, ['class' => '']) !!}
            {!! Form::label('max_installments', 'Nº máx de parcelas', ['class' => '']) !!}
        </div>
        <div class="col s12 m8 l9 left-align">
            <small>Para gerenciar as parcelas automaticamente, deixe o campo <b>Nº máx de parcelas</b> com o valor <b>0</b>. Dessa maneira, o número máximo de parcelas será: <u>meses restantes até o evento + 1</u>.</small>
        </div>
    </div>
    <div class="clearfix"></div>
    <br>
    <div class="textarea-field col s12">
        {!! Form::label('description', 'Descrição', ['class' => '']) !!}
        {!! Form::textarea('description', null, ['class' => '']) !!}
    </div>
    <div class="col s12">
        <br>
        {!! Form::submit('Salvar alterações', ['class' => 'btn btn-small']) !!}
        <a href="{{ route('admin.events.index') }}" class="btn btn-warning">Retornar</a>
    </div>
</div>