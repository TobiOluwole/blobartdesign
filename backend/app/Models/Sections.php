<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Sections extends Model {


    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'page_id',
        'sort_id',
        'content',
        'type',
    ];


    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'created_at',
        'updated_at',
    ];


    protected $casts = [
        'content' => 'array', // Automatically casts to array on retrieval
    ];

    /**
     * Mutator: Automatically JSON encode before saving to the database.
     *
     * @param  mixed  $value
     * @return void
     */
    public function setContent($value)
    {
        $this->attributes['content'] = json_encode($value);
    }

    /**
     * Accessor: Automatically JSON decode when retrieving from the database.
     *
     * @param  string  $value
     * @return array|null
     */
    public function getContent($value)
    {
        return $value ? json_decode($value, true) : null;
    }


    public function page(): BelongsTo
    {
        return $this->belongsTo(Page::class);
    }
}
