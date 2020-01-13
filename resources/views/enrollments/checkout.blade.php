@extends('layouts.layout')

@section('title', 'Visualizar Inscrição')

@section('content')
    <div id="checkout" class="container-fluid">
    {!! Form::open(['route' => ['enrollments.submit', $enrollment->code], 'class' => 'form-horizontal']) !!}
        <div class="row">

            <div class="col s12 m6 l4">
                <div class="card-panel">
                    <div class="row billing_address">
                        <h2>PAGAMENTO DE INSCRIÇÃO</h2>
                        <ul class="collection">
                            <li class="collection-item">
                                <b>Evento</b>: {{ $enrollment->event->name }} <small>(cód: {{ $enrollment->event->code }})</small>
                            </li>
                            <li class="collection-item">
                                <b>Valor</b>: {{ number_format($enrollment->event->price, 2, ',', '') }}
                                {!! Form::hidden('event_price', $enrollment->event->price, ['id' => 'event_price']) !!}
                            </li>
                        </ul>
                        <br>
                        <div class="center-align">
                            <h6>Pagamento processado por</h6>
                            <img src="{{ asset('images/pagseguro.png') }}" alt="PagSeguro">
                        </div>
                    </div>
                </div>
                <div class="card-panel">
                    <div class="row billing_address">
                        <h2>Endereço de Cobrança</h2>
                        <p>O endereço de cobrança é este?</p>
                        <p>
                            {{ $enrollment->street }}, {{ $enrollment->number }} - {{ $enrollment->district }}
                            <br>
                            {{ $enrollment->postal_code }} -
                            {{ $enrollment->city }}/{{ $enrollment->state }}
                            <br>
                            {{ $enrollment->complement }}

                        </p>
                        <div class="col s12 center-align">
                            <div class="col s6 m5 offset-m1 l4 offset-l2">
                            {!! Form::radio('same_address', 1, true, ['id' => 'same_address-yes' ,'class' => '']) !!}
                                <label for="same_address-yes">Sim</label>
                            </div>
                            <div class="col s6 m5 l4">
                                {!! Form::radio('same_address', 0, false, ['id' => 'same_address-no' ,'class' => '']) !!}
                                <label for="same_address-no">Não</label>
                            </div>
                        </div>
                        <div class="billing_address_alt">
                            <div class="input-field col s12 ">
                                {!! Form::text('street', null, ['class' => '', 'id' => 'street']) !!}
                                {!! Form::label('street', 'Rua', ['class' => '']) !!}
                            </div>
                            <div class="input-field col s12">
                                {!! Form::text('number', null, ['class' => '', 'id' => 'number']) !!}
                                {!! Form::label('number', 'Número', ['class' => '']) !!}
                            </div>
                            <div class="input-field col s12">
                                {!! Form::text('complement', null, ['class' => '', 'id' => 'complement']) !!}
                                {!! Form::label('complement', 'Complemento', ['class' => '']) !!}
                            </div>
                            <div class="input-field col s12">
                                {!! Form::text('district', null, ['class' => '', 'id' => 'district']) !!}
                                {!! Form::label('district', 'Bairro', ['class' => '']) !!}
                            </div>
                            <div class="input-field col s12">
                                {!! Form::text('postal_code', null, ['class' => '', 'length' => '8', 'id' => 'postal_code']) !!}
                                {!! Form::label('postal_code', 'CEP (apenas números)', ['class' => '']) !!}
                            </div>
                            <div class="input-field col s12">
                                {!! Form::select('state_id', $states, null, ['id' => 'state_id', 'class' => '']) !!}
                                {!! Form::label('state_id', 'Estado', ['class' => '']) !!}
                            </div>
                            <div class="input-field col s12">
                                {!! Form::select('city_id', [],
                                null, ['id' => 'city_id', 'class'=> '']); !!}
                                {!! Form::label('city_id', 'Cidade', ['class' => '']) !!}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col s12 m6 l4">
                <div class="card-panel">
                    <div class="row select_type">
                        <h2>Método de Pagamento</h2>
                        <div class="col s6">
                            {!! Form::radio('payment_type', "credit_card", false, ['id' => 'payment_type-credit_card' ,'class' => '']) !!}
                            <label for="payment_type-credit_card">
                                <i class="material-icons">credit_card</i>
                                <br>
                                Cartão de Crédito
                            </label>
                        </div>
                        <div class="col s6">
                            {!! Form::radio('payment_type', "online_debit", false, ['id' => 'payment_type-online_debit' ,'class' => '']) !!}
                            <label for="payment_type-online_debit">
                                
                                <i class="material-icons">attach_money</i>
                                <br>
                                Débito Online
                            </label>
                        </div>
                        <div class="clearfix"></div>
                        <div class="center-align error-div">
                            <br>
                        </div>
                    </div>
                    <div id="credit-card-data" class="row">
                        <h3>Cartão de crédito selecionado</h3>
                        <div class="card-wrapper"></div>
                        <br>
                        <div class="input-field col s12 m10 offset-m1 l8 offset-l2">
                            {!! Form::text('card_number', null, ['id' => 'card_number']) !!}
                            {!! Form::label('card_number', 'Número do Cartão') !!}
                        </div>
                        <div class="input-field col s3 m2 offset-m2 l2 offset-l2">
                            {!! Form::text('card_expiration_month', null, ['id' => 'card_expiration_month']) !!}
                            {!! Form::label('card_expiration_month', 'Mês') !!}
                        </div>
                        <div class="input-field col s5 m5 offset-m1 l3">
                            {!! Form::text('card_expiration_year', null, ['id' => 'card_expiration_year']) !!}
                            {!! Form::label('card_expiration_year', 'Ano') !!}
                        </div>
                        <div class="input-field col s4 m3">
                            {!! Form::text('card_cvc', null, ['id' => 'card_cvc']) !!}
                            {!! Form::label('card_cvc', 'CVC') !!}
                        </div>
                        {!! Form::hidden('card_brand', null, ['id' => 'card_brand']) !!}
                        {!! Form::hidden('card_token', null, ['id' => 'card_token']) !!}
                        <div class="input-field col s12 installments">
                            {!! Form::select('installments', [], null, ['id' => 'installments', 'class'=> '']); !!}
                            {!! Form::label('installments', 'Opções de Parcelamento', ['class' => '']) !!}
                        </div>
                        {!! Form::hidden('installment_value', null, ['id' => 'installment_value']) !!}
                        <div class="col s12 center-align">
                            <br>
                            <div class="col s12">
                                O comprador é o titular do cartão?
                            </div>
                            <div class="clearfix"></div>
                            <br>
                            <div class="col s6 m5 offset-m1 l4 offset-l2">
                            {!! Form::radio('same_holder', 1, true, ['id' => 'same_holder-yes' ,'class' => '']) !!}
                                <label for="same_holder-yes">Sim</label>
                            </div>
                            <div class="col s6 m5 l4">
                                {!! Form::radio('same_holder', 0, false, ['id' => 'same_holder-no' ,'class' => '']) !!}
                                <label for="same_holder-no">Não</label>
                            </div>
                        </div>
                        <div class="input-field col s12">
                            {!! Form::text('credit_card_holder_name', null, ['id' => 'credit_card_holder_name']) !!}
                            {!! Form::label('credit_card_holder_name', 'Nome') !!}
                        </div>
                        <div class="input-field col s12">
                            {!! Form::text('credit_card_holder_cpf', null, ['class' => '', 'length' => '11', 'id' => 'credit_card_holder_cpf']) !!}
                            {!! Form::label('credit_card_holder_cpf', 'CPF (apenas números)', ['class' => '']) !!}
                        </div>
                        <div class="input-field col s12">
                            {!! Form::text('credit_card_holder_date_of_birth', null, ['class' => '', 'id' => 'credit_card_holder_date_of_birth']) !!}
                            {!! Form::label('credit_card_holder_date_of_birth', 'Data de Nascimento', ['class' => '']) !!}
                        </div>
                        <div class="input-field col s12">
                            {!! Form::text('credit_card_holder_phone', null, ['class' => '', 'id' => 'credit_card_holder_phone']) !!}
                            {!! Form::label('phone', 'Telefone', ['class' => '']) !!}
                        </div>
                    </div>
                    <div id="online-debit-data" class="row center-align">
                        <h3>Débito online selecionado</h3>
                        <img class="loader" src="{{ asset('images/ajax-loader.gif') }}" alt="Carregando...">
                        <ul class="collection"></ul>
                    </div>
                </div>
            </div>


            <div class="col s12 m6 l4 summary">
                <div class="card-panel ">
                    <div class="row billing_address">
                        <h2>Resumo</h2>
                        <ul class="collection">
                            <li class="collection-item">
                                <b>Evento</b>: {{ $enrollment->event->name }} <small>(cód: {{ $enrollment->event->code }})</small>
                            </li>
                            <li class="collection-item">
                                <b>Método de Pagamento</b>: <span class="payment_method">Não selecionado</span>
                            </li>
                            <li class="collection-item">
                                <b>Parcelamento</b>: <span class="installment_option">Não selecionado</span>
                            </li>
                        </ul>
                        <div class="center-align">
                            {!! Form::hidden('sender_hash', null, ['id' => 'sender_hash']) !!}

                            {!! Form::submit('Finalizar', ['class' => 'btn btn-large green']) !!}
                            <br><br>
                            <div id="checkout-result">

                            </div>
                            <div id="checkout-loader">
                                <img src="{{ asset('images/ajax-loader.gif') }}" alt="Carregando...">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    {!! Form::close() !!}
    </div>
    <script type="text/javascript" src="{{ PagSeguro::getUrl()['javascript'] }}"></script>
    <script>
        PagSeguroDirectPayment.setSessionId('{{ PagSeguro::startSession() }}'); //PagSeguroRecorrente tem um método identico, use o que preferir neste caso, não tem diferença.
        var maxInstallments = {{ $enrollment->event->getMaxInstallments() }};
    </script>

    
@endsection
