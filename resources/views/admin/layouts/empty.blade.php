<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>{{ env('APP_NAME') }} | @yield('title')</title>
        <link rel="stylesheet" href="{{ elixir('css/all.css') }}">
        <link href='http://fonts.googleapis.com/css?family=Roboto:300,400,700|Magra:400, 700|Ubuntu' rel='stylesheet' type='text/css'>
        <link rel="shortcut icon" href="{{asset('assets/images/favicon.ico')}}">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    </head>
    <body>
        <div id="fb-root"></div>
        <script>(function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.4";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));</script>
<!--         <header class="floating">

        </header> -->
        <div class="container">
          @if(Session::has('status'))
              <div class="alert alert-success">
                  {{ Session::get('status') }}
              </div>
          @endif
          @if($errors->any())
              <div class="alert alert-danger">
                  @foreach($errors->all() as $error)
                      <p>{{ $error }}</p>
                  @endforeach
              </div>
          @endif
        </div>

        <main>
            @yield('content')
        </main>

<!--         <footer>

        </footer> -->



    <!-- Latest compiled and minified JavaScript -->
<script>
  var baseUrl = '{{ asset('') }}';
  var oldAlbumId = 0;
  var albumPage = 1;
  var photoCount = 0;

</script>



  </body>
</html>