<html>
    <head>
        <title>@yield('title') | Base Website - Painel de Administração</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="{{ mix('css/admin.css') }}">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="shortcut icon" href="{{asset('images/favicon.png')}}">
        <script src="{{ mix('js/admin.js') }}"></script>
    </head>
    <body class="grey lighten-4">
        <header>
            @include('admin.layouts.header')
        </header>

        <main class="container">

            @include('admin.layouts.errors')

            @include('admin.layouts.flash-messages')


            @yield('content')

        </main>

        <footer class="page-footer">
            @include('admin.layouts.footer')
        </footer>
    </body>
    


</html>