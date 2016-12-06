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
       'collecting-cards' => 'Collecting Cards',
       'treasure-hunt' => 'Treasure Hunt',
   ],
   'languages' => [
       'en' => 'English',
       'et' => 'Estonian',
       'ru' => 'Russian',
       'fi' => 'Finnish',
       'swe' => 'Swedish',
   ],
   'zoos' => [
     'skansen' => 'Skansen',
     'korkeasaari' => 'Korkeasaari',
     'tallinn' => 'Tallinn Zoo',
   ],
   'question-types' => [
     'one-correct-answer' => 'One correct answer',
     'multiple-correct-answers' => 'Multiple correct answers',
     'freeform-answer' => 'Freeform answer',
     'match-pairs' => 'Match pairs',
     'embedded-content' => 'Embedded content',
     'photo' => 'Photo',
     'information' => 'Information',
   ],
   'forms' => [
       'labels' => [
           'activity-type' => 'Activity Type',
           'title' => 'Title',
           'description' => 'Description',
           'difficulty-level' => 'Difficulty Level',
           'playing-time' => 'Playing Time',
           'language' => 'Language',
           'contact-information' => 'Contact Information',
           'featured-image' => 'Freatured Image',
           'zoo' => 'Zoo',
           'question-type' => 'Question Type',
           'location' => 'Location',
       ],
       'help' => [
           'playing-time' => 'Activity time in minutes',
           'difficulty-level' => 'Choose a suitable range from available values. Defaults to all included.',
           'featured-image' => 'An image in JPEG or PNG format. Uploaded image will be resized to 800 by 800 pixels.',
           'map' => 'Please select the correct Zoo and drag the marker to the specific location.',
       ],
       'buttons' => [
           'create' => 'Create',
           'save' => 'Save',
           'cancel' => 'Cancel',
       ],
   ],
   'actions' => [
       'create' => 'Create',
       'edit' => 'Edit',
       'delete' => 'Delete',
   ],
];
