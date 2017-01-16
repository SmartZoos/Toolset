@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">
                    {{ $activity_item->title }}
                </div>

                <div class="panel-body">
                    <h3>{{ trans('general.forms.labels.description') }}</h3>
                    <p class="sz-display-new-lines">{{ $activity_item->description }}</p>
                    <h3>{{ trans('general.forms.labels.question-type') }}</h3>
                    <p>{{ $activity_item::getQuestionType($activity_item->type) }}</p>
                    @if ( $activity_item->isEmbeddedContent() )
                        <p>{!! html_entity_decode($activity_item->embedded_content) !!}</p>
                    @endif
                    <h3>{{ trans('general.forms.labels.zoo') }}</h3>
                    <p>{{ Activity::getZoo($activity_item->zoo) }}</p>
                    <h3>{{ trans('general.forms.labels.language') }}</h3>
                    <p>{{ trans('general.languages.' . $activity_item->language) }}</p>
                    <h3>{{ trans('general.forms.labels.location') }}</h3>
                    <p>
                        <img src="https://maps.googleapis.com/maps/api/staticmap?center={{ $activity_item->latitude}},{{ $activity_item->longitude }}&amp;zoom=18&amp;size=240x180&amp;maptype=hybrid&amp;markers=color:red%7C{{ $activity_item->latitude}},{{ $activity_item->longitude }}&amp;style=feature:poi%7Cvisibility:off&amp;style=feature:transit.station%7Cvisibility:off&amp;key={{ config('services.maps.google.api_key') }}" alt="map">
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
