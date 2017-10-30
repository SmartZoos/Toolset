<div class="pull-right">
    <a href="#" class="btn btn btn-qr-code btn-sm" data-toggle="modal" data-target="#qr-code-modal" data-api-url="{!! route('api.activity.qrcode', ['id' => $activity->id]) !!}" data-title="{{ $activity->title }}" title="{{ trans('general.actions.get-qr-code') }}">
        <i class="mdi mdi-qrcode"></i>
    </a>
    @php ( $includePlay = isset($includePlay) ? $includePlay : true )
    @if ( $includePlay !== false )
        <form class="sz-action-form-inline" action="{{ route('activity.start', ['id' => $activity->id]) }}" method="POST">
            {{ csrf_field() }}
            <button type="submit" class="btn btn-success btn-sm" title="{{ trans('general.actions.play') }}">
              <i class="mdi mdi-play-circle-outline"></i>
            </button>
        </form>
    @endif
    @if(Auth::check())
            @can('update', $activity)
                <a href="{!! route('activity.edit', ['id' => $activity->id]) !!}" class="btn btn-primary btn-sm" title="{{ trans('general.actions.edit') }}">
                    <i class="mdi mdi-pencil"></i>
                </a>
            @endcan
            @can('delete', $activity)
                <a href="#" class="btn btn-danger btn-sm" title="{{ trans('general.actions.delete') }}" data-method="delete" data-confirm="{{ trans('general.confirmations.delete') }}" data-action="{!! route('activity.delete', ['id' => $activity->id]) !!}">
                    <i class="mdi mdi-delete"></i>
                </a>
            @endcan
    @endif
</div>
