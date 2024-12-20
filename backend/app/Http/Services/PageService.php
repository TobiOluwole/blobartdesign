<?php

namespace App\Http\Services;


use App\Models\Page;

class PageService {

    public function getAllPages()
    {
        return Page::all();
    }

    public function getPage($name){
        $page = Page::where('display_name', $name)->first();

        if($page){
            return response()->json($page, 200);
        }

        return response()->json(null, 404);
    }
}
