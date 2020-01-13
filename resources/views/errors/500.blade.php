<!DOCTYPE html>
<html lang="{{ Config::get('app.locale') }}">

    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta name="robots" content="noindex, nofollow" />

        <title>Erro - {{ env('APP_NAME') }}</title>

        <meta name="csrf-token" content="{{ csrf_token() }}">

        <link rel="shortcut icon" href="{{asset('images/favicon.ico')}}">

        <link rel="stylesheet" href="{{ mix('css/all.css') }}">

    </head>

    <body id="error-500" class="error-page">
        <main>
            <div class="row">
                <div class="col s12 m6 offset-m3 l4 offset-l4 center-align">
                    <img class="logo" src="{{ asset('images/logo.png') }}" alt="{{ env('APP_NAME') }}">
                    <br>
                    <p>Algo deu errado</p>
                    <small>Clique no botão abaixo para continuar sua navegação.</small>
                    <a href="{{ route('home.index') }}" class="btn btn-small">Voltar</a>

                    @if(app()->isLocal())
                        @if(app()->bound('sentry') && !empty(Sentry::getLastEventID()))
                            <div class="subtitle">Error ID: {{ Sentry::getLastEventID() }}</div>

                            <!-- Sentry JS SDK 2.1.+ required -->
                            <script src="https://cdn.ravenjs.com/3.3.0/raven.min.js"></script>

                            <script>
                                Raven.showReportDialog({
                                    eventId: '{{ Sentry::getLastEventID() }}',
                                    // use the public DSN (dont include your secret!)
                                    dsn: 'https://e9ebbd88548a441288393c457ec90441@sentry.io/3235',
                                    user: {
                                        'name': 'Jane Doe',
                                        'email': 'jane.doe@example.com',
                                    }
                                });
                            </script>
                        @endif
                    @endif
                </div>
            </div>

        </main>
    </body>
</html>
