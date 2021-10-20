@extends('layouts.app')

@section('content')
    <div class="container">
        <h1>{{ trans('pages.legal.account-deletion.heading' }}</h1>

        <div class="well">
            {{ trans('pages.legal.account-deletion.content') }}
        </div>
    </div>
@endsection
