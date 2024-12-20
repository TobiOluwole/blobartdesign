<?php

use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::group(["prefix" => "/api"], function () {

    Route::get('/', function () {
        return 'Blob Art Design Api V1';
    });

    Route::group(["prefix" => "/auth"], function () {

        Route::get('/',[UserController::class, 'myToken']);
        Route::post('/',[UserController::class, 'login']);
        Route::patch('/',[UserController::class, 'getNewToken']);
        Route::delete('/',[UserController::class, 'logout']);

        Route::post('/send-reset-link',[UserController::class, 'forgotPassword']);
        Route::patch('/reset-password/{token?}',[UserController::class, 'resetPassword']);

    });


    Route::group(["prefix" => "/pages"], function () {
        Route::get('/', [PageController::class, 'allPages']);
    });

    Route::get('page/{name?}', [PageController::class, 'getPage']);

});
