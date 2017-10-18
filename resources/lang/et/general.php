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

   'activity-type' => [
       'collecting-cards' => 'Kaartide kogumine',
       'treasure-hunt' => 'Aarete jaht',
   ],
   'activity-status' => [
       'complete' => 'Lõpeta tegevus',
       'ongoing' => 'Käimasolev tegevus',
   ],
   'discount-voucher-status' => [
       'inactive' => 'Inactive',
       'active' => 'Active',
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
           'activity-type' => 'Raja tüüp',
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
           'duration' => 'Duration',
           'status' => 'Status',
           'discount-voucher' => 'Discount Voucher',
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
           'add-activity-items' => 'Lisa rajapunktid',
           'load-more' => 'Lae veel',
           'add-option' => 'Lisa valik',
           'reset' => 'Lähtesta',
       ],
       'placeholders' => [
           'keyword-or-title' => 'Märksõna või pealkiri',
           'option-text' => 'Valikute tekst...',
           'embedded-content' => 'Lisa vistutatav kood siia',
           'search-text' => 'Otsimiseks sisesta tekstiosa',
           'read-more' => 'Sisesta veebiaadress kust leiab rohkem infot',
       ],
       'options' => [
           'any' => 'Kõik',
       ],
       'addons' => [
           'hours' => 'hours',
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
       'discount-voucher-spend' => 'Spend Discount Voucher',
   ],
   'minutes' => 'minutid',
   'confirmations' => [
       'delete' => 'Oled sa kindek, et soovid selle kustutada?',
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
       'text' => 'This website uses cookies to ensure you get the best possible online experience. By continuing to use our website, you agree to the use of cookies.',
       'button-agree' => 'Agree',
   ],
];
