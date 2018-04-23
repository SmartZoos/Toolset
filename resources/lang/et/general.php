<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Authentication Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines are used during authentication for various
    | messages that we need to display to the user. You are free to modify
    | these language lines according to your application's requirements.
    |
    */

   'activity-status' => [
       'complete' => 'Lõpeta tegevus',
       'ongoing' => 'Käimasolev tegevus',
   ],
   'discount-voucher-status' => [
       'inactive' => 'Mitte aktiivne',
       'active' => 'Aktiivne',
   ],
   'language' => 'Keel',
   'languages' => [
       'en' => 'Inglise',
       'et' => 'Eesti',
       'ru' => 'Vene',
       'fi' => 'Soome',
       'sv' => 'Rootsi',
   ],
   'zoos' => [
     'skansen' => 'Skansen',
     'korkeasaari' => 'Korkeasaari',
     'tallinn' => 'Tallinna Loomaaed',
   ],
   'question-types' => [
     'one-correct-answer' => 'Üks õige vastus',
     'multiple-correct-answers' => 'Mitu õiget vastust',
     'freeform-answer' => 'Vabas vormis vastus',
     'match-pairs' => 'Leia paarid',
     'embedded-content' => 'Vistutatud sisu',
     'photo' => 'Foto',
     'information' => 'Informatsioon',
   ],
   'forms' => [
       'labels' => [
           'title' => 'Pealkiri',
           'description' => 'Kirjeldus',
           'difficulty-level' => 'Raskusaste',
           'playing-time' => 'Raja läbimiseks kuluv aeg',
           'contact-information' => 'Kontakt',
           'featured-image' => 'Kaanepilt',
           'zoo' => 'Loomaaed',
           'question-type' => 'Küsimuse tüüp',
           'location' => 'Asukoht',
           'activity-items' => 'Rajapunktid',
           'proximity' => 'Kaugus',
           'search-text' => 'Otsi teksti',
           'read-more' => 'Lisainfo',
           'image' => 'Pilt',
           'duration' => 'Kestus',
           'status' => 'Staatus',
           'discount-voucher' => 'Allahindluse kupong',
           'access-code' => 'Ligipääsu kood',
           'access-code-clues' => 'Ligipääsu koodi vihjed',
           'amount' => 'Kogus',
           'hide-incognito' => 'Peida anonüümsed',
           'hide-incomplete' => 'Peida lõpetamata',
           'from' => 'Alates',
           'until' => 'Kuni',
           'question-or-information' => 'Küsimus/informatsioon',
           'promoted' => 'Tõsta esile, kuvatakse spetsiaalset ikooni mängu juures ning liiguta nimekirjas ettepoole',
       ],
       'help' => [
           'playing-time' => 'Raja läbimiseks kuluv aeg minutites',
           'image' => 'Sobiv formaat on kas JPEG või PNG. Üleslaetud pilt vähendatakse mõõtu 800 x 800 pikslit.',
           'map' => 'Palun vali sobiv loomaaed ja lohista marker õigesse asukohta.',
           'question-types' => [
               'information' => 'Kirjeldav tekst mängu kohta.',
               'freeform-answer' => 'Mängijale kuvatakse tekstikasti sisestaud tekstI.',
               'embedded-content' => 'Mängijale kuvatakse vistutatud koodi taga olev meediaobjekt.',
               'photo' => 'Mängija postitab vastuseks foto.',
           ],
       ],
       'buttons' => [
           'create' => 'Loo',
           'save' => 'Salvesta',
           'cancel' => 'Tühista',
           'close' => 'Sulge',
           'submit' => 'Saada',
           'search' => 'Otsi',
           'load-more' => 'Lae veel',
           'add-option' => 'Lisa valik',
           'reset' => 'Lähtesta',
           'apply-filters' => 'Sea filtrid',
           'search-activity-items' => 'Otsi rajapunkte',
           'create-new-activity-item' => 'Loo uus rajapunkt',
           'login-or-register' => 'Logi sisse/registreeru',
       ],
       'placeholders' => [
           'keyword-or-title' => 'Märksõna või pealkiri',
           'option-text' => 'Valikute tekst...',
           'embedded-content' => 'Lisa vistutatav kood siia',
           'search-text' => 'Otsimiseks sisesta tekstiosa',
           'read-more' => 'Sisesta veebiaadress kust leiab rohkem infot',
           'name-or-email' => 'Nimi või e-posti aadress',
           'access-code' => 'Code or text to access question without positioning restrictions',
           'access-code-clues' => 'Clues to what/where the Access Code is',
           'datetime' => 'Kuupäev või kuupäev ja kellaaeg',
           'question-or-information' => 'Please write Question or Information, depending on chosen Question Type',
       ],
       'options' => [
           'any' => 'Kõik',
       ],
       'addons' => [
           'hours' => 'tunnid',
           'awarded' => 'awarded',
       ],
       'tooltips' => [
           'remove-image' => 'Check to remove an existing image',
           'remove-selected-image' => 'Remove currently selected image',
           'mark-option-as-correct' => 'Check to mark option as correct',
       ],
       'warnings' => [
           'readd-pictures' => 'If you had added any pictures, you have to add them again. Sorry.',
       ],
   ],
   'actions' => [
       'create' => 'Loo',
       'edit' => 'Muuda',
       'delete' => 'Kustuta',
       'play' => 'Mängi',
       'send-to-backpack' => 'Saada Backpacki',
       'download-baked-badge' => 'Lae alla õpimärgi pildifail',
       'assertion-open' => 'Open badge-i tõendi URL',
       'discount-voucher-spend' => 'Kuluta kupong',
       'get-qr-code' => 'Näita QR-koodi',
       'reveal-discount' => 'Reveal discount',
   ],
   'minutes' => 'minutid',
   'confirmations' => [
       'delete' => 'Oled sa kindek, et soovid selle kustutada?',
       'play' => 'You are not logged in! - Progress will not be saved and any rewards cannot be claimed.',
       'block-account' => 'Are you sure you want to block selected account?',
       'unblock-account' => 'Are you sure you want to unblock selected account?',
       'delete-account' => 'Are you sure you want to delete selected account? This can not be undone and would also delete any content created by the user!',
       'unload-protection' => 'You may have unsaved changes. Do you still want to leave?',
   ],
   'date-time' => [
       'formats' => [
           'short' => 'F d, Y',
           'medium' => 'F d, Y H:i',
           'long' => 'F d, Y, H:i:s',
       ],
       'created-at' => 'Loodud',
       'updated-at' => 'Viimati uuendatud',
   ],
   'roles' => [
       'admin' => 'Administraator',
       'zooAdmin' => 'Administraator',
       'zooMember' => 'Liige',
   ],
   'difficulty-level' => [
     'easy' => 'Lihtne',
     'medium' => 'Mõõdukas',
     'hard' => 'Raske',
   ],
   'cookie-consent' => [
       'text' => 'This website uses cookies to ensure you get the best possible online experience. By continuing to use our website, you <a href=":policy" target="_blank">agree to the use of cookies</a>.',
       'button-agree' => 'Nõustun',
   ],
   'system-requirements' => 'Minimum requirements: operation system iOS (version 10) or Android 7. At least 3G internet connection and working GPS module is needed.',
   'messages' => [
       'warnings' => [
           'account-blocked' => 'This account has been suspended. For more information please contact administration.',
           'account-email-not-verified' => 'This account has not been verified yet. Use verification instructions sent to you by email.',
       ],
       'successes' => [
           'account-email-verification-sent' => 'Your account has been created. We have sent you an email containing verification instructions.',
           'account-email-verified' => 'Your account has been successfuly verified. You can now log in.',
       ],
   ],
];
