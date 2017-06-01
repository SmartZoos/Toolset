<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\ImageService;
use App\Services\OpenBadgesService;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(ImageService::class, function()
        {
            return new ImageService();
        });

        $this->app->singleton(OpenBadgesService::class, function()
        {
            return new OpenBadgesService();
        });
    }
}
