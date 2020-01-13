@extends('layouts.layout')

@section('title', 'Visualizar Inscrição')

@section('content')
    <div class="row">
        <div class="col s12 m10 offset-m1 l8 offset-l2 card-panel">
            

            <div class="row">
                <div class="col s12">
                    <h3>Dados da inscrição</h3>
                    <p><b>Evento</b>: {{ $enrollment->event->name }} <small>(cód: {{ $enrollment->event->code }})</small></p>
                    <p><b>Código da Inscrição</b>: {{ $enrollment->code }}</p>
                    @if($enrollment->transaction_code)
                        <p><b>Código da Transação</b>: {{ $enrollment->transaction_code }}</p>
                    @endif
                    <div class="status">
                        <div class="chip {{ $enrollment->status->code }} white-text">
                            {{ $enrollment->status->name }}
                        </div>
                        <br><br>
                        @if($enrollment->status()->get()->first()->code == "pending")
                            @if(!$enrollment->transaction_code && $diff < 172800)
                                <a href="{{ route('enrollments.checkout', $enrollment->code) }}"><img src="{{asset('images/pagseguro.gif')}}" alt="Comprar com Pagseguro"></a>
                                <br>
                                <p><b>Atenção:</b> Você ainda tem {{ $showDiff }} para realizar o pagamento. Após este prazo, sua inscrição será cancelada.</p>
                                <br>
                                <small>OBS.: Se você já efetuou o pagamento e ele já foi confirmado pelo PagSeguro, aguarde 48 horas até que ele seja validado pelo sistema. Se este prazo já se esgotou, <a href="{{ route('contact.participant') }}">entre em contato com o administrador</a>.</small>
                            @elseif($diff > 172800)
                                <p>Data limite para pagamento expirada.</p>
                            @endif

                            @if(!$enrollment->transaction_code)
                                <br><br>
                                <div class="col s12">
                                    <a href="{{ route('enrollments.cancel', $enrollment->code) }}" class="btn red">Cancelar Inscrição</a>
                                </div>
                                <br>
                            @endif
                        @elseif($enrollment->status()->get()->first()->code == "suspended")
                            <p>{{ $enrollment->status()->get()->first()->description }}</p>
                        @endif
                    </div>
                    <div class="clearfix"></div>
                    <hr>
                    <p><b>Nome</b>: {{ $enrollment->name }}</p>
                    <p><b>CPF</b>: {{ $enrollment->cpf }}</p>
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
                    <p><b>Rua</b>: {{ $enrollment->street }}</p>
                    <p><b>Número</b>: {{ $enrollment->number }}</p>
                    <p><b>Complemento</b>: {{ $enrollment->complement }}</p>
                    <p><b>Bairro</b>: {{ $enrollment->district }}</p>
                    <p><b>CEP</b>: {{ $enrollment->postal_code }}</p>
                    <p><b>Cidade</b>: {{ $enrollment->city }}</p>
                    <p><b>Estado</b>: {{ $enrollment->state }}</p>
                    <br>
                </div>
                <br><br>
                <div class="col s12">
                    <a href="{{ route('home.index') }}" class="btn btn-warning">Retornar</a>
                </div>
            </div>

        </div>
    </div>
    <hr>
@endsection
