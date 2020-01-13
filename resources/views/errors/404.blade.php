<!DOCTYPE html>
<html lang="{{ Config::get('app.locale') }}">

    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta name="robots" content="noindex, nofollow" />

        <title>Página não encontrada - {{ env('APP_NAME') }}</title>

        <meta name="csrf-token" content="{{ csrf_token() }}">

        <link rel="shortcut icon" href="{{asset('images/favicon.ico')}}">

        <link rel="stylesheet" href="{{ mix('css/all.css') }}">

    </head>

    <body id="error-404" class="error-page">
        <main>
            <div class="row">
                <div class="col s12 m6 offset-m3 l4 offset-l4 center-align">
                    <img class="logo" src="{{ asset('images/logo.png') }}" alt="{{ env('APP_NAME') }}">
                    <br>
                    <img src="{{ asset('images/404.png') }}" alt="Erro 404">
                    <p>Página <b>não</b><br>encontrada</p>
                    <a href="{{ route('home.index') }}" class="btn btn-small">Voltar</a>
                </div>
            </div>

        </main>
    </body>
</html>
