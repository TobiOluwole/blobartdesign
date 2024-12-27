<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Page extends Model {



    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'url',
        'display_name',
        'display_name_tr',
        'page_id',
        'is_home',
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


    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected $casts = [
        'url' => 'string', // Prevents conversion of empty string to null
    ];

    public function sections(): HasMany {
        return $this->hasMany(Sections::class)->orderBy('sort_id', 'asc');
    }
}
