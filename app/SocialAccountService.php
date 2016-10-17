<?php

namespace App;

use Laravel\Socialite\Contracts\Provider;

class SocialAccountService
{
    /**
     * Get connected local account, find existing by email and connect or just
     * create a new one based on data provided.
     * @param  Socialite $providerUser User data from social provider
     * @return User                    Local user account
     */
    public function createOrGetUser(Provider $provider) {
        $providerUser = $provider->user();
        $providerName = class_basename($provider);

        $account = SocialAccount::where( 'provider', $providerName )
            ->where( 'provider_user_id', $providerUser->getId() )
            ->first();

        if ( $account ) {
            return $account->user;
        } else {
            $account = new SocialAccount([
                'provider_user_id' => $providerUser->getId(),
                'provider' => $providerName,
            ]);

            $user = User::where( 'email', $providerUser->getEmail() )->first();

            if ( !$user ) {
                $user = User::create([
                    'name' => $providerUser->getName(),
                    'email' => $providerUser->getEmail(),
                    'password' => '',
                ]);
            }

            $account->user()->associate( $user );
            $account->save();

            return $user;
        }
    }
}
