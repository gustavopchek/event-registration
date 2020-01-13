<html>
    <head>
        <title>Painel de Administração - Login | {{ env('APP_NAME') }}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="{{ elixir('css/admin.css') }}">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <meta name="robots" content="noindex, nofollow" />

    </head>
    <body id="login">
        <header>
            <div class="col s8 offset-s2 m4 offset-m4 l2 offset-l5 center-align">
                <img class="responsive-img" src="{{asset('images/logo.png')}}" alt="Logo" style="max-height: 200px">
            </div>
        </header>
        <div class="clearfix"></div>

        <main class="container">

            @include('admin.layouts.errors')

            @include('admin.layouts.flash-messages')


            <div class="row">
                <div class="col s12 m10 offset-m1 l8 offset-l2">
                    <div class="panel-heading center-align">
                        <h4>Login - Painel de Administração</h4>
                    </div>
                    <div class="panel-body">
                        <form class="form-horizontal" role="form" method="POST" action="{{ url('/admin/login') }}">
                            {{ csrf_field() }}

                            <div class="input-field col s12 m10 offset-m1 l8 offset-l2">
                                {!! Form::email('email', null, ['class' => 'form-control'.($errors->has('email') ? ' validate invalid' : '')]) !!}
                                {!! Form::label('email', 'E-mail', ['class' => '', 'data-error' => $errors->has('email') ? $errors->first('email') : '']) !!}
                            </div>

                            <div class="input-field col s12 m10 offset-m1 l8 offset-l2">
                                {!! Form::password('password', ['class' => 'form-control'.($errors->has('password') ? ' validate invalid' : '')]) !!}
                                {!! Form::label('password', 'Senha', ['class' => '', 'data-error' => $errors->has('password') ? $errors->first('password') : '']) !!}
                            </div>

                            <div class="col s12 m10 offset-m1 l8 offset-l2">
                                {!! Form::checkbox('remember', null, false, ['id' => 'remember', 'class' => 'filled-in']) !!}
                                {!! Form::label('remember', 'Lembrar', ['class' => '']) !!}
                            </div>

                            <div class="clearfix"></div>
                            <br>

                            <div class="col s12 m10 offset-m1 l8 offset-l2 center-align">
                                <div class="col-md-8 col-md-offset-4">
                                    {!! Form::submit('Login', ['class' => 'btn']) !!}

                                    <a class="btn white black-text" href="{{ url('/admin/password/reset') }}">
                                        Esqueci a senha
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </main>

        <footer class="page-footer">
            @include('admin.layouts.footer')
        </footer>

        <script src="{{ elixir('js/admin-all.js') }}"></script>
    </body>

</html>
