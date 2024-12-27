<?php

namespace App\Http\Controllers;

use App\Http\Middleware\JWTMiddleware;
use App\Http\Services\SectionsService;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

class SectionsController extends Controller implements HasMiddleware {
    protected SectionsService $sectionsService;

    public function __construct(SectionsService $sectionsService){
        $this->sectionsService = $sectionsService;
    }

    public static function middleware(): array
    {
        return [
            new Middleware(JWTMiddleware::class, except: [
                'getSocials',
                'getPageSections',
            ])
        ];
    }

    public function setSocials(Request $request){
        return $this->sectionsService->setSocials($request->only([
            'phone',
            'email',
            'address',
            'facebook',
            'twitter',
            'instagram',
            'linkedin',
            'location_link'
        ]));
    }

    public function getSocials(){
        return $this->sectionsService->getSocials();
    }

    public function getPageSections($page_id){
        return $this->sectionsService->getPageSections($page_id);
    }

    public function updateSections(Request $request){
        return $this->sectionsService->updateSections($request->all());
    }

}
