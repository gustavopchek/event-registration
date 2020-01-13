@extends('admin.layouts.layout')

@section('title', 'Alterar Status de Inscrição')

@section('content')
    <div class="row">
        <div class="col s12 m10 offset-m1 l8 offset-l2 card-panel">
            

            <div class="row">
                <div class="col s12">
                    <h3>Dados da inscrição</h3>
                    <p><b>Evento</b>: {{ $enrollment->event()->get()->first()->name }}</p>
                    <p><b>Nome</b>: {{ $enrollment->name }}</p>
                    <p><b>CPF</b>: {{ $enrollment->cpf }}</p>
                    <p><b>E-mail</b>: {{ $enrollment->email }}</p>
                    <p><b>Data de Nascimento</b>: {{ $enrollment->date_of_birth }}</p>
                    <p><b>Estado Civil</b>: 
                        @if($enrollment->marital_status == "single")
                            Solteiro(a)
                        @elseif($enrollment->marital_status == "married")
                            Casado(a)
                        @elseif($enrollment->marital_status == "separed")
                            Separado(a)
                        @elseif($enrollment->marital_status == "divorced")
                            Divorciado(a)
                        @elseif($enrollment->marital_status == "widower")
                            Viúvo(a)
                        @elseif($enrollment->marital_status == "partner")
                            Companheiro(a)
                        @else
                            Outro
                        @endif
                    </p>
                    <p><b>Sexo</b>: {{{ $enrollment->gender == 'm' ? 'Masculino' : 'Feminino' }}}</p>
                    <p><b>Membro?</b>: {{{ $enrollment->member == true ? 'Sim' : 'Não' }}}</p>
                    <p><b>Telefone</b>: {{ $enrollment->phone }}</p>
                    <br>
                    @if($transaction_data)
                        <h4>Dados da transação:</h4>
                        <p>Pagamento pelo PagSeguro</p>
                        <p><b>Status do PagSeguro</b>: 
                            @if($transaction_data->status == "1")
                                <u>Aguardando pagamento</u> - o comprador iniciou a transação, mas até o momento o PagSeguro não recebeu nenhuma informação sobre o pagamento.
                            @elseif($transaction_data->status == "2")
                                <u>Em análise</u> - o comprador optou por pagar com um cartão de crédito e o PagSeguro está analisando o risco da transação.
                            @elseif($transaction_data->status == "3")
                                <u>Paga</u> - a transação foi paga pelo comprador e o PagSeguro já recebeu uma confirmação da instituição financeira responsável pelo processamento.
                            @elseif($transaction_data->status == "4")
                                <u>Disponível</u> - a transação foi paga e chegou ao final de seu prazo de liberação sem ter sido retornada e sem que haja nenhuma disputa aberta.
                            @elseif($transaction_data->status == "5")
                                <u>Em disputa</u> - o comprador, dentro do prazo de liberação da transação, abriu uma disputa.
                            @elseif($transaction_data->status == "6")
                                <u>Devolvida</u> - o valor da transação foi devolvido para o comprador.
                            @elseif($transaction_data->status == "7")
                                <u>Cancelada</u> - a transação foi cancelada sem ter sido finalizada.
                            @endif
                            
                        </p>
                    @endif
                </div>
            </div>

            <hr>

            <div class="row">
                <div class="col s12">
                    {!! Form::model($enrollment, ['method' => 'PATCH', 'class' => 'form-horizontal', 'route' => ['admin.enrollments.update', $enrollment->id]]) !!}
                        <fieldset class="center">
                            <legend>Alterar Status</legend>
                            <div class="input-field col s12">
                                {!! Form::select('status_id', $status, $enrollment->status()->get()->first()->id, ['class' => 'form-control']) !!}
                                {!! Form::label('name', 'Status', ['class' => '']) !!}
                            </div>
                            <div class="col s12 left-align">
                                {!! Form::checkbox('notify', '1', true, ['id' => 'notify', 'class' => 'filled-in']) !!}
                                {!! Form::label('notify', 'Notificar por E-mail', ['class' => '']) !!}
                            </div>
                            
                            <div class="col s12">
                                <br>
                                {!! Form::submit('Alterar Status', ['class' => 'btn btn-small', 'onclick' => 'return confirm("Confirmar alteração de status?")']) !!}
                                <a href="" class="btn btn-warning">Retornar</a>
                            </div>
                        </fieldset>
                    {!! Form::close() !!}
                </div>
            </div>

        </div>
    </div>
    <hr>
@endsection