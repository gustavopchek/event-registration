<div class="row">
    @if(Auth::guest())
        <div class="col s8 offset-s2 m4 offset-m4 l2 offset-l5 center-align">
            <br>
            <img id="logo" src="{{asset('images/logo.png')}}" alt="" style="max-width: 100%; height: 100px; text-align: center">
        </div>
    @else
        <nav>
            <div class="container">
                <div class="nav-wrapper">
                    <a href="{{ route('home.index') }}" class="brand-logo">
                        <img id="logo" src="{{asset('images/logo-flat.png')}}" alt="{{ env('APP_NAME') }}">
                    </a>
                    <a href="#" data-activates="mobile-menu" class="button-collapse"><i class="material-icons">menu</i></a>
                    <ul id="nav-mobile" class="right hide-on-med-and-down" style="margin-top: 18px;">
                        <li>{{ Auth::user()->email }}</li>
                        <li><a class="dropdown-button black-text" href="#!" data-activates="account-dropdown"><i class="material-icons white-text">more_vert</i></a></li>
                    </ul>
                    <ul id="mobile-menu" class="side-nav" id="mobile-menu">
                        <li><a href="{{ route('enrollments.index') }}">Minhas Inscrições</a></li>
                        <li><a href="{{ route('participant.account') }}">Alterar Dados</a></li>
                        <li><a href="{{ route('participant.password') }}">Alterar Senha</a></li>
                        <li><a href="{{ route('contact.participant') }}">Contato</a></li>
                        <li><a href="{{ route('participant.logout') }}">Sair</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <ul id="account-dropdown" class="dropdown-content">
            <li><a href="{{ route('enrollments.index') }}">Minhas Inscrições</a></li>
            <li><a href="{{ route('participant.account') }}">Alterar Dados</a></li>
            <li><a href="{{ route('participant.password') }}">Alterar Senha</a></li>
            <li><a href="{{ route('contact.participant') }}">Contato</a></li>
            <li class="divider"></li>
            <li>
                <a href="{{ route('participant.logout') }}" onclick="event.preventDefault();
                    document.getElementById('logout-form').submit();">Sair
                </a>
                {!! Form::open(['id'=> 'logout-form', 'method' => 'POST', 'class' => 'hide', 'route' => ['participant.logout']]) !!}
                >
                    {{ csrf_field() }}
                {!! Form::close() !!}
            </li>
        </ul>
    @endif
</div>