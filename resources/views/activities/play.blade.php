<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <link rel="icon" sizes="200x200" href="{{ asset('img/logos/logo-square.png') }}">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'SmartZoos') }}</title>

    <!-- Styles -->
    <link href="//cdn.jsdelivr.net/npm/animate.css@3.6.1/animate.min.css" rel="stylesheet">
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
            'isLoggedIn' => Auth::check(),
            'userName' => Auth::check() ? Auth::user()->name : trans('pages.play.game.not-logged-in'),
        ]); ?>;
        window.SmartZoos = <?php echo json_encode([
            'config' => [
                'base_url' => url('/'),
                'exit_url' => $exit_url,
                'map' => [
                    'key' => config('services.maps.google.api_key'),
                    'enableStreetView' => config('services.maps.google.enable_street_view'),
                ],
                'locale' => App::getLocale(),
                'sentry' => [
                    'sdn' => config('services.sentry.sdn'),
                ],
            ],
            'data' => [
                'game' => $game_data,
                'translations' => [
                    'description' => trans('general.forms.labels.description'),
                    'activity-type' => trans('general.forms.labels.activity-type'),
                    'difficulty-level' => trans('general.forms.labels.difficulty-level'),
                    'playing-time' => trans('general.forms.labels.playing-time'),
                    'minutes' => trans('general.minutes'),
                    'language' => trans('general.language'),
                    'contact-information' => trans('general.forms.labels.contact-information'),
                    'featured-image' => trans('general.forms.labels.featured-image'),
                    'zoo' => trans('general.forms.labels.zoo'),
                    'close' => trans('general.forms.buttons.close'),
                    'submit' => trans('general.forms.buttons.submit'),
                    'its-you' => trans('pages.play.game.its-you'),
                    'info' => trans('pages.play.game.info'),
                    'position-tracking' => trans('pages.play.game.position-tracking'),
                    'exit' => trans('pages.play.game.exit'),
                    'exit-confirmation' => trans('pages.play.game.exit-confirmation'),
                    'change-map-type' => trans('pages.play.game.change-map-type'),
                    'textual-answer-placeholder' => trans('pages.play.game.textual-answer-placeholder'),
                    'image-format-hint' => trans('pages.play.game.image-format-hint'),
                    'apply-item-bounds' => trans('pages.play.game.apply-item-bounds'),
                    'results-heading' => trans('pages.play.game.results-heading'),
                    'number-of-questions' => trans('pages.play.game.number-of-questions'),
                    'go' => trans('pages.play.game.go'),
                    'gps-error' => trans('pages.play.game.gps-error'),
                    'read-more-about' => trans('pages.play.game.read-more-about'),
                    'back' => trans('pages.play.game.back'),
                    'next' => trans('pages.play.game.next'),
                    'got-it' => trans('pages.play.game.got-it'),
                    'tips-text' => trans('pages.play.game.tips-text'),
                    'access-code-placeholder' => trans('pages.play.game.access-code-placeholder'),
                    'complete' => trans('pages.play.game.complete'),
                    'icons' => [
                        'help' => trans('pages.play.game.icons.help'),
                        'active' => trans('pages.play.game.icons.active'),
                        'inactive' => trans('pages.play.game.icons.inactive'),
                        'correct' => trans('pages.play.game.icons.correct'),
                        'incorrect' => trans('pages.play.game.icons.incorrect'),
                    ],
                    'items' => [
                        'gameplay_instructions' => [
                            'title' => trans('pages.play.game.items.gameplay_instructions.title'),
                            'description' => trans('pages.play.game.items.gameplay_instructions.description'),
                        ],
                        'look_closely' => [
                            'title' => trans('pages.play.game.items.look_closely.title'),
                            'description' => trans('pages.play.game.items.look_closely.description'),
                        ],
                        'look_out' => [
                            'title' => trans('pages.play.game.items.look_out.title'),
                            'description' => trans('pages.play.game.items.look_out.description'),
                        ],
                        'do_not_disturb' => [
                            'title' => trans('pages.play.game.items.do_not_disturb.title'),
                            'description' => trans('pages.play.game.items.do_not_disturb.description'),
                        ],
                        'help_others' => [
                            'title' => trans('pages.play.game.items.help_others.title'),
                            'description' => trans('pages.play.game.items.help_others.description'),
                        ],
                    ],
                    'vouchers' => [
                        'heading' => trans('pages.play.game.vouchers.heading'),
                        'details' => trans('pages.play.game.vouchers.details'),
                        'button' => trans('navbar.discount_vouchers'),
                    ],
                ]
            ],
        ]);
        ?>;
    </script>
</head>
<body>
    <div id="sz-play-app">
        <div id="loading" v-if="isLoading() && !isGameComplete()">
            <span v-if="!hasGeoLocationError()" class="animated flash infinite">
                <i class="mdi mdi-cloud-sync"></i>
                    {{ trans('pages.play.game.loading') }}
            </span>

            <transition name="error-fade" mode="out-in" enter-active-class="animated fadeInDownBig" leave-active-class="animated fadeOutUpBig">
                <div class="sz-geolocation-error" v-if="hasGeoLocationError()">
                    <i class="mdi mdi-map-marker-circle"></i>
                    <span v-html="geoLocationErrorMessage"></span>
                </div>
            </transition>
        </div>

        <game-tutorial-modal ref="tutorialModal" v-if="game" v-bind:activity="game.activity"></game-tutorial-modal>
        <game-information-modal ref="informationModal" v-if="game" v-bind:activity="game.activity"></game-information-modal>
        <game-image-dialog ref="imageDialog" v-bind:base-url="baseUrl" v-bind:image="'game_complete.png'" v-bind:in-animation-class="'jackInTheBox'" v-bind:out-animation-class="'fadeOutDownBig'"></game-image-dialog>
        <game-results-modal ref="resultsModal" v-if="isGameComplete()" v-bind:game="game" v-bind:base-url="baseUrl"></game-results-modal>
        <game-map v-if="!isLoading()" v-bind:latitude="latitude" v-bind:longitude="longitude" v-bind:game="game" v-bind:base-url="baseUrl"></game-map>
    </div>

    <!-- Scripts -->
    <script src="{{ elixir('js/app.js') }}"></script>
    <script src="{{ elixir('js/play.js') }}"></script>
    @include('services.analytics')
    @include('services.userreport')

</body>
</html>
