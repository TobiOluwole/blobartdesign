<?php

namespace App\Http\Services;


use App\Models\Page;
use Illuminate\Support\Facades\Mail;

class PageService {

    public function getAllPages()
    {
        return Page::all();
    }

    public function getPage($nameOrId){
        $page =
            $nameOrId !== null ?
                Page::where('url', $nameOrId)->orWhere('id', $nameOrId)->with('sections')->first() :
                Page::where('is_home', 1)->with('sections')->first();

        if($page){
            return response()->json($page, 200);
        }

        return response()->json(null, 404);
    }

    public function updatePage($id, $data){
        $page = Page::find($id);

        if($page){
            $page->update($data);
            $page->save();

            return response()->json($page, 200);
        }

        return response()->json(null, 404);
    }

    public function createdPage($data){
        $page = new Page($data);
        $page->save();

        return response()->json($page, 200);
    }

    public function deletePage($id){
        Page::destroy($id);

        return response()->json(null, 204);
    }

    public function sendContactMail($name, $email, $message){
        Mail::html(
            "
                    Hi, Admin <br />
                    You have a new message from $name with $email :<br />
                    $message
                ",
            function ($message) {
                $message->to("tobioluwole69@gmail.com")
                    ->subject('Contact Form Mail');
            });

        return response()->json(null, 204);
    }
}
