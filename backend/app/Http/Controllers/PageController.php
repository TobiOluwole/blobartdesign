<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Services\PageService;
use Illuminate\Http\Request;

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

    public function updatePage(Request $request, $id = null){
        if($request->url == null ) {
            $request->merge(['url' => '']);
        }
        return $this->pageService->updatePage($id, $request->only('display_name', 'display_name_tr', 'is_home', 'page_id', 'url' ));
    }

    public function createPage(Request $request){
        if($request->url == null ) {
            $request->merge(['url' => '']);
        }
        return $this->pageService->createdPage($request->only('display_name', 'display_name_tr', 'is_home', 'page_id', 'url' ));
    }
}
