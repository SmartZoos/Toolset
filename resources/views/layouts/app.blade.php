<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'SmartZoos') }}</title>

    <!-- Styles -->
    <link href="//cdn.jsdelivr.net/npm/animate.css@3.6.1/animate.min.css" rel="stylesheet">
    <link href="{{ elixir('css/app.css') }}" rel="stylesheet">

    @yield('header-styles')

    <!-- Scripts -->
    <script>
        window.Laravel = <?php echo json_encode([
            'csrfToken' => csrf_token(),
            'baseUrl' => url('/'),
            'apiUrl' => url('/api'),
            'locale' => App::getLocale(),
            'isLoggedIn' => Auth::check(),
            'unloadProtectionMessage' => trans('general.confirmations.unload-protection'),
        ]); ?>;
    </script>

    @yield('header-scripts')
</head>
<body>
    @include('includes.cookie-consent')

    <div id="app">
        <div class="alert alert-danger text-center" role="alert" style="margin-bottom: 0; border-radius: 0;">
            <strong>We regret to inform you that our web app will be shutting down on August 2023.</strong>
            <br>
            We understand that this news may come as a surprise and inconvenience for some of you, but we want to assure you that we have made this decision after much consideration and careful evaluation of the app’s performance.
            <br>
            We would like to thank you for your loyal support and for being a part of our community. We are grateful for the trust you have placed in us, and we apologize for any disruption that this may cause in your workflow.
            <br>
            We want to thank you for your understanding and for being a part of our journey. If you have any questions or concerns, please do not hesitate to contact us at priit.tammets [at] tlu.ee.
        </div>

        @include('includes.navbar')

        @yield('content')
    </div>

    <footer>
        @include('includes.system-requirements')
        <!-- Scripts -->
        <script src="{{ elixir('js/app.js') }}"></script>

        @yield('footer-scripts')
        @include('services.analytics')
        @include('services.userreport')
    </footer>
</body>
</html>
