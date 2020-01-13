<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>@yield('title') | {{ env('APP_NAME') }}</title>
        <link rel="stylesheet" href="{{ mix('css/all.css') }}">
        <link rel="shortcut icon" href="{{asset('assets/images/favicon.png')}}">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">


    </head>
    <body>
        <!-- Google Tag Manager -->
        <noscript><iframe src="//www.googletagmanager.com/ns.html?id={{ env('GOOGLE_TAG_MANAGER') }}"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','{{ env('GOOGLE_TAG_MANAGER') }}');</script>
        <!-- End Google Tag Manager -->
        <div id="fb-root"></div>
        <script>(function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.4";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));</script>
        <header>
            @include('layouts.header')
        </header>
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

        <footer>
            @include('layouts.footer')
        </footer>



    <!-- Latest compiled and minified JavaScript -->
<script>
  var baseUrl = '{{ asset('') }}';


</script>

  <script src="{{ mix('js/all.js') }}"></script>


  </body>
</html>