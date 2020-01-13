<html>
    <head>
        <title>Login | {{ env('APP_NAME') }}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="{{ elixir('css/all.css') }}">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    </head>
    <body id="login">
        <header style="height: 100px; padding: 10px center-align">
            <div class="row">
                <div class="col s8 offset-s2 m4 offset-m4 l2 offset-l5 center-align">
                    <img id="logo" src="{{asset('assets/images/logo.png')}}" alt="" style="max-width: 100%; height: 100px; text-align: center">
                </div>
            </div>
        </header>

        <main class="container">

            @include('admin.layouts.errors')

            @include('admin.layouts.flash-messages')


            <div class="row">
                <div class="col s12 m10 offset-m1 l8 offset-l2">
                    <div class="panel">
                        <div class="panel-heading center-align">
                            <h2>Login</h2>
                        </div>
                        <div class="panel-body">
                            <form class="form-horizontal" role="form" method="POST" action="{{ route('login') }}">
                                <input type="hidden" name="_token" value="{{ csrf_token() }}">
                                <div class="input-field col s12 m10 offset-m1 l8 offset-l2">
                                    {!! Form::text('email', null, ['class' => 'form-control', 'type' => 'username']) !!}
                                    {!! Form::label('email', 'E-mail', ['class' => '', 'data-success' => '', 'data-error' => 'Email inválido']) !!}
                                </div>
                                <div class="input-field col s12 m10 offset-m1 l8 offset-l2">
                                    {!! Form::password('password', ['class' => 'form-control']) !!}
                                    {!! Form::label('password', 'Senha', ['class' => '']) !!}
                                </div>
                                <div class="input-field col s12 m10 offset-m1 l8 offset-l2 center-align">
                                    {!! Captcha::display() !!}
                                </div>
                                <div class="col s12 center-align">
                                    <br>
                                    {!! Form::submit('Login', ['class' => 'btn btn-small']) !!}
                                    <a class="btn btn-small white orange-text" href="/register">Registrar</a>
                                </div>
                            </form>
                            <br>
                            <div class="col s12 center-align">
                                <br>
                                <a href="{{ route('participant.email') }}">Esqueci a Senha</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>

        <footer>
            @include('admin.layouts.footer')
        </footer>

        <script src="{{ elixir('js/admin.js') }}"></script>
    </body>

</html>