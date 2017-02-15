<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <link rel="icon" sizes="200x200" href="{{ asset('img/logos/logo-square.png') }}">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'SmartZoos') }}</title>

    <!-- Styles -->
    <link href="//cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/1.8.36/css/materialdesignicons.min.css" rel="stylesheet">
    <link href="//cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" rel="stylesheet">
    <link href="{{ elixir('css/app.css') }}" rel="stylesheet">
    <style>
        html, body {
            height: 100%;
            width: 100%;
            padding: 0;
            margin: 0;
        }
    </style>

    <!-- Scripts -->
    <script>
        window.Laravel = <?php echo json_encode([
            'csrfToken' => csrf_token(),
        ]); ?>;
        window.SmartZoos = <?php echo json_encode([
            'config' => [
                'base_url' => url('/'),
                'map' => [
                    'green_dotless_icon_url' => asset('img/map/spotlight-poi-dotless-green.png'),
                    'key' => config('services.maps.google.api_key'),
                    'allowed_distance' => (int)config('services.maps.allowed_distance'),
                ]
            ],
            'data' => [
                'game' => $game_data,
            ],
        ]);
        ?>;
    </script>
</head>
<body>
    <div id="sz-play-app">
        <div id="loading" v-if="isLoading()">
            <span v-if="!hasGeoLocationError()" class="animated flash infinite">
                <i class="mdi mdi-cloud-sync"></i>
                {{ trans('pages.play.game.loading') }}
            </span>

            <transition name="error-fade-in-up-big" enter-active-class="animated fadeInUpBig">
                <div class="sz-geolocation-error" v-if="hasGeoLocationError()">
                    <i class="mdi mdi-map-marker-circle"></i>
                    <span v-html="geoLocationErrorMessage"></span>
                </div>
            </transition>
        </div>

        <game-map v-if="!isLoading()" v-bind:latitude="latitude" v-bind:longitude="longitude"></game-map>
    </div>

    <!-- Scripts -->
    <script src="{{ elixir('js/app.js') }}"></script>
    <script src="{{ elixir('js/play.js') }}"></script>

</body>
</html>
