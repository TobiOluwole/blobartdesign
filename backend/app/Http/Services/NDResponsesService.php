<?php

namespace App\Http\Services;

use Illuminate\Support\Facades\Http;

class NDResponsesService
{
    protected $language;
    protected $sensitivity;

    public function __construct($language = 'en', $sensitivity = 'normal')
    {
        $this->language = $language;
        $this->sensitivity = $sensitivity;
    }

    /**
     * Get the response from the external API.
     *
     * @param string $key
     * @param string|null $language
     * @param string|null $sensitivity
     * @return string
     */
    public function getResponse($key, $language = null, $sensitivity = null)
    {
        $language ??= $this->language;
        $sensitivity ??= $this->sensitivity;

        // Make the HTTP request to the external API
        $response = Http::withoutVerifying()->get("https://responses.nousdynasty.com/responses/{$language}/{$key}/{$sensitivity}");

        // Return the response text (or handle errors as needed)
        return $response->successful() ? $response->body() : 'Error fetching response';
    }
}
