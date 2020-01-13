@extends('layouts.layout')

@section('title', 'Visualizar Inscrição')

@section('content')
    <div class="row">
        <div class="col s12 m10 offset-m1 l8 offset-l2 card-panel">
            

            <div class="row">
                <div class="col s12">
                    <h3>Transação Realizada</h3>
                    <p><b>Código da Transação</b>: {{ $enrollment->transaction_code }}</p>
                    <p>Assim que a confirmação de pagamento for recebida, sua inscrição será confirmada.</p>
                    <hr>
                    <p><b>Evento</b>: {{ $enrollment->event()->get()->first()->name }}</p>
                    <p><b>Código da Inscrição</b>: {{ $enrollment->code }}</p>
                    <br>
                    @if(isset($transaction_data) && $transaction_data->paymentLink)
                        <b>Débito Online</b>
                        <blockquote>
                            <p>Acesse o link abaixo para pagar usando débito online:</p>
                            <a href="{{ $transaction_data->paymentLink }}" target="_blank">{{ $transaction_data->paymentLink }}</a>
                        </blockquote>
                    @endif
                </div>
                <div class="clearfix"></div>
                <br>
                <div class="col s12">
                    <a href="{{ route('enrollments.show', $enrollment->code) }}" class="btn btn-warning">Ir para a página da inscrição</a>
                    <a href="{{ route('home.index') }}" class="btn btn-warning">Retornar à página principal</a>
                </div>
            </div>

        </div>
    </div>
    <hr>
@endsection
