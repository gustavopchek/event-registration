@extends('layouts.layout')

@section('title', 'Alterar Dados')

@section('content')
    <div class="row">
        <div class="col s12 m10 offset-m1 l8 offset-l2 card-panel">
            {!! Form::model($participant, ['method' => 'PATCH', 'class' => 'form-horizontal', 'route' => ['participant.account', $participant->id]]) !!}
                <fieldset class="center">
                    <legend>Alterar Dados</legend>
                    <div class="input-field col s12">
                        {!! Form::text('name', null, ['class' => '']) !!}
                        {!! Form::label('name', 'Nome Completo', ['class' => '']) !!}
                    </div>
                    <div class="input-field col s12 m6">
                        {!! Form::email('email', null, ['class' => '', 'disabled']) !!}
                        {!! Form::label('email', 'E-mail', ['class' => '', 'data-success' => '', 'data-error' => 'Email inválido']) !!}
                    </div>
                    <div class="input-field col s12 m6">
                        {!! Form::text('cpf', null, ['class' => '', 'length' => '11', 'disabled']) !!}
                        {!! Form::label('cpf', 'CPF (apenas números)', ['class' => '']) !!}
                    </div>
                    <div class="col s12">
                        <small>OBS.: Não é posível alterar o endereço de e-mail ou CPF através desta página. Se estes dados estiverem incorretos, <a href="{{ route('contact.participant') }}">entre em contato com o administrador</a>.</small>
                        <br>
                    </div>
                    <div class="clearfix"></div>
                    <br>
                    <div class="input-field col s12 m6">
                        {!! Form::text('date_of_birth', null, ['class' => '']) !!}
                        {!! Form::label('date_of_birth', 'Data de Nascimento', ['class' => '']) !!}
                    </div>
                    <div class="input-field col s12 m6">
                        {!! Form::select('marital_status', [
                            'single' => 'Solteiro(a)', 
                            'married' => 'Casado(a)',
                            'separated' => 'Separado(a)',
                            'divorced' => 'Divorciado(a)',
                            'widower' => 'Viúvo(a)',
                            'partner' => 'Companheiro(a)'
                        ], 
                        null, ['class'=> 'form-control']); !!} 
                        {!! Form::label('marital_status', 'Estado Civil', ['class' => '']) !!}
                    </div>
                    <div class="col s12 m6">
                        <div class="col s12">
                            Sexo:
                        </div>
                        <div class="col s6">
                        {!! Form::radio('gender', "m", true, ['id' => 'gender-m' ,'class' => '']) !!}
                            <label for="gender-m">Masculino</label>
                        </div>
                        <div class="col s6">
                            {!! Form::radio('gender', "f", false, ['id' => 'gender-f' ,'class' => '']) !!}
                            <label for="gender-f">Feminino</label>
                        </div>
                    </div>
                    <div class="col s12 m6">
                        <div class="col s12">
                            Membro?
                        </div>
                        <div class="col s6">
                        {!! Form::radio('member', 1, true, ['id' => 'member-yes' ,'class' => '']) !!}
                            <label for="member-yes">Sim</label>
                        </div>
                        <div class="col s6">
                            {!! Form::radio('member', 0, false, ['id' => 'member-no' ,'class' => '']) !!}
                            <label for="member-no">Não</label>
                        </div>
                    </div>
                    <div class="input-field col s12 m6">
                        {!! Form::text('phone', null, ['class' => '']) !!}
                        {!! Form::label('phone', 'Telefone', ['class' => '']) !!}
                    </div>
                    <div class="input-field col s12 m6">
                        {!! Form::text('street', null, ['class' => '']) !!}
                        {!! Form::label('street', 'Rua', ['class' => '']) !!}
                    </div>
                    <div class="input-field col s12 m6">
                        {!! Form::text('number', null, ['class' => '']) !!}
                        {!! Form::label('number', 'Número', ['class' => '']) !!}
                    </div>
                    <div class="input-field col s12 m6">
                        {!! Form::text('complement', null, ['class' => '']) !!}
                        {!! Form::label('complement', 'Complemento', ['class' => '']) !!}
                    </div>
                    <div class="input-field col s12 m6">
                        {!! Form::text('district', null, ['class' => '']) !!}
                        {!! Form::label('district', 'Bairro', ['class' => '']) !!}
                    </div>
                    <div class="input-field col s12 m6">
                        {!! Form::text('postal_code', null, ['class' => '', 'length' => '8']) !!}
                        {!! Form::label('postal_code', 'CEP (apenas números)', ['class' => '']) !!}
                    </div>
                    <div class="input-field col s12 m6">
                        {!! Form::select('state_id', $states, isset($participant->city_id) ? $participant->city->state->id : null, ['id' => 'state_id', 'class' => '']) !!}
                        {!! Form::label('state_id', 'Estado', ['class' => '']) !!}
                    </div>
                    <div class="input-field col s12 m6">
                        {!! Form::select('city_id', [],
                        null, ['id' => 'city_id', 'class'=> '']); !!}
                        {!! Form::label('city_id', 'Cidade', ['class' => '']) !!}
                    </div>
                    <div class="col s12">
                        <br>
                        {!! Form::submit('Salvar alterações', ['class' => 'btn btn-small']) !!}
                        <a href="{{ route('home.index') }}" class="btn btn-warning">Retornar</a>
                    </div>
                </fieldset>
            {!! Form::close() !!}

        </div>
    </div>
    <script>
        var state_id = '{{$participant->city->state->id}}';
        var city_id = '{{$participant->city->id}}';
    </script>
@endsection