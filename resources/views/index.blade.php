<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale())  }}">

<head>

    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <title>Blog::Laravel&Vue</title>
</head>

<body>
<noscript>
    <strong>We're sorry but doesn't work properly without JavaScript enabled.
        Please enable it to continue.
    </strong>
</noscript>
<div id="app">
</div>
</body>
<script src="{{ asset('js/app.js')  }}" defer></script>

</html>
