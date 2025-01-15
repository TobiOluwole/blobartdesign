<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Middleware\JWTMiddleware;
use App\Http\Services\PageService;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

class PageController extends Controller implements HasMiddleware {
    protected PageService $pageService;

    public static function middleware(): array
    {
        return [
            new Middleware(JWTMiddleware::class, except: [
                'allPages',
                'getPage',
                'sendContactMail'
            ])
        ];
    }
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

    public function deletePage($id = null){
        return $this->pageService->deletePage($id);
    }

    public function sendContactMail(Request $request){
        return $this->pageService->sendContactMail($request->name, $request->email, $request->message);
    }
}
