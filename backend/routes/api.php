<?php

use App\Http\Controllers\PageController;
use App\Http\Controllers\SectionsController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::group(["prefix" => "/api"], function () {

    Route::get('/', function () {
        return 'Blob Art Design Api V1';
    });

    Route::get('/recaptchaVerify/{token}', [SectionsController::class, 'verifyGoogleCaptchaToken']);

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

    Route::group(["prefix" => "/page"], function () {
        Route::get('/{name?}', [PageController::class, 'getPage']);
        Route::post('/', [PageController::class, 'createPage']);
        Route::put('/{id?}', [PageController::class, 'updatePage']);
        Route::delete('/{id}', [PageController::class, 'deletePage']);

        Route::post('/contact', [PageController::class, 'sendContactMail']);
    });

    Route::group(["prefix" => "/sections"], function () {
        Route::get('/gallery/{section_id}/{gallery_name}', [SectionsController::class, 'getGalleryImages']);
        Route::get('/{page_id?}', [SectionsController::class, 'getPageSections']);
        Route::post('/', [PageController::class, 'createSection']);
        Route::put('/{id?}', [SectionsController::class, 'updateSections']);
        Route::delete('/{id?}', [SectionsController::class, 'deleteSections']);
    });


    Route::get('/socials', [SectionsController::class, 'getSocials']);
    Route::put('/socials', [SectionsController::class, 'setSocials']);

});
