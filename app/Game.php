<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;

use App\Traits\UuidModel;

use Illuminate\Support\Facades\Log;

use App\Activity;

use Illuminate\Support\Facades\File;

class Game extends Model
{
    use UuidModel;
    use LogsActivity;

    /**
     * Define that model does not use increments
     * @var boolean
     */
    public $incrementing = false;

    /**
     * Define attributes to be logged
     * @var array
     */
    protected static $logAttributes = ['activity_id', 'user_id', 'complete',];

    /**
     * Determine if game has been completed.
     * @return boolean Game completion status
     */
    public function isComplete() {
        return (bool)$this->complete;
    }

    /**
     * Get Activity current Game is connected with,.
     * @return App\Activity Activity object.
     */
    public function activity() {
        return $this->belongsTo(Activity::class);
    }

    /**
     * Get user account current social one belongs to.
     * @return App\User Application local user account
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get answers for the current game.
     * @return App\GameAnswer [description]
     */
    public function answers()
    {
        return $this->hasMany(GameAnswer::class);
    }

    /**
     * [hasAnswerTo description]
     * @param  int     $id [description]
     * @return boolean     [description]
     */
    public function hasAnswerTo(int $id)
    {
        return $this->answers->keyBy('activity_item_id')->has($id);
    }

    /**
     * [getAnswerTo description]
     * @param  int    $id [description]
     * @return [type]     [description]
     */
    public function getAnswerTo(int $id)
    {
        return $this->answers->keyBy('activity_item_id')->get($id);
    }

    /**
     * Returns structure with data used for the game.
     * @return array All the data required for the game
     */
    public function getGameData() {
        $activity = $this->activity;
        $data = [
            'id' => $this->id,
            'complete' => (bool)$this->complete,
            'answers' => [],
        ];

        if ( $this->answers ) {
            foreach ( $this->answers as $answer ) {
                $data['answers'][$answer->activity_item_id] = $answer->getGameData();
            }
        }
        // Force answers to be interpreted as an object if empty
        if ( count($data['answers']) === 0 ) {
            $data['answers'] = (object)$data['answers'];
        }

        $data['activity'] = [
            'id' => $activity->id,
            'title' => $activity->title,
            'description' => $activity->description,
            'difficulty_level' => $activity->getDifficultyLevel(),
            'playing_time' => $activity->playing_time,
            'language' => $activity->getLanguage(),
            'contact_information' => $activity->contact_information,
            'featured_image' => $activity->getFeaturedImageUrl(),
            'zoo' => $activity->getZoo(),
            'proximity_check' => (bool)$activity->proximity_check,
            'proximity_radius' => $activity->proximity_radius ? $activity->proximity_radius : (int)config('services.maps.allowed_distance'),
            'questions' => [],
        ];

        if ( $activity->activityItems ) {
            foreach( $activity->activityItems as $item ) {
                $tmp = [
                    'id' => $item->id,
                    'title' => $item->title,
                    'description' => $item->description,
                    'image_url' => $item->getImageUrl(),
                    'embedded_content' => $item->embedded_content,
                    'type' => $item->type,
                    'latitude' => $item->latitude,
                    'longitude' => $item->longitude,
                    'access_code' => $item->access_code,
                    'access_code_clues' => $item->access_code_clues,
                    'read_more' => $item->read_more,
                    'options' => [],
                    'pairs' => [],
                ];

                if ( $item->options ) {
                    foreach( $item->options as $option ) {
                        $tmp['options'][] = [
                            'id' => $option->id,
                            'option' => $option->option,
                            'image_url' => $option->getImageUrl(),
                            'correct' => (bool) $option->correct,
                        ];
                    }
                }

                if ( $item->pairs ) {
                    foreach( $item->pairs as $pair ) {
                        $tmp['pairs'][] = [
                            'id' => $pair->id,
                            'option' => $pair->option,
                            'image_url' => $pair->getOptionImageUrl(),
                            'option_match' => $pair->option_match,
                            'image_match_url' => $pair->getOptionMatchImageUrl(),
                        ];
                    }
                }

                $data['activity']['questions'][] = $tmp;
            }
        }

        return $data;
    }

    /**
     * Get game completion percentage.
     * @return bool
     */
    public function getCompletionPercentage() {
        if ( $this->isComplete() )
        {
            return 100;
        }

        $itemIds = $this->activity->belongsToMany(ActivityItem::class)->select('id')->pluck('id');

        if ( count($itemIds) === 0 )
        {
            return 0;
        }

        $answersCount = $this->answers()->whereIn('activity_item_id', $itemIds)->count();

        return round($answersCount / count($itemIds) * 100, 0, PHP_ROUND_HALF_UP);
    }

    /**
     * Returns storage path hash for the ActivityItem
     * @return string Storage path
     */
    public function getStoragePath()
    {
        return Activity::getStoragePathForId($this->activity_id) . $this->id . '/';
    }

    /**
     * Delete storage if one exists
     * @return boolean
     */
    public function deleteFileStorage()
    {
        $fullPath = public_path('uploads/images/' . $this->getStoragePath());

        if ( File::exists($fullPath) && File::isDirectory($fullPath) )
        {
            File::deleteDirectory($fullPath);
        }

        return false;
    }
}
