<?php

namespace App\Http\Controllers;

use App\Http\Services\SectionsService;
use Illuminate\Http\Request;

class SectionsController extends Controller{
    protected SectionsService $sectionsService;

    public function __construct(SectionsService $sectionsService){
        $this->sectionsService = $sectionsService;
    }

    public function getPageSections($page_id){
        return $this->sectionsService->getPageSections($page_id);
    }

    public function updateSections(Request $request){
        return $this->sectionsService->updateSections($request->all());
    }

}
