<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Services\PageService;

class PageController extends Controller{
    protected PageService $pageService;

    public function __construct(PageService $pageService){
        $this->pageService = $pageService;
    }
    public function allPages(){
        return $this->pageService->getAllPages();
    }

    public function getPage($name = null){
        return $this->pageService->getPage($name);
    }
}
