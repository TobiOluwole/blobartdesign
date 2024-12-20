<?php

namespace App\Http\Controllers;

use App\Http\Middleware\JWTMiddleware;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;

use App\Http\Services\UserService;

class UserController extends Controller implements HasMiddleware
{

    protected UserService $userService;

    public function __construct(UserService $userService){
        $this->userService = $userService;
    }

    public static function middleware(): array
    {
        return [
            // 'auth:api',
//            new Middleware('auth:api', except: [
//                'login',
//                'forgotPassword',
//                'resetPassword'
//            ]),
            new Middleware(JWTMiddleware::class, except: [
                'login',
                'forgotPassword',
                'resetPassword'
            ])
        ];
    }

    public function login(Request $request){

        $request->validate([
            "email"=> "required|email",
            "password"=> "required",
        ]);

        return $this->userService->login($request->email,$request->password);
    }

    public function myToken(Request $request){
        return $request->user();
    }

    public function getNewToken(){
        return $this->userService->refreshToken();
    }

    public function logout(Request $request){
        return $this->userService->logout($request->cookie('jwt_token'));
    }

    public function forgotPassword(Request $request){

        $request->validate([
            "email"=> "required|email",
        ]);

        return $this->userService->forgotPassword($request->email);
    }

    public function resetPassword(Request $request, $token){

        $request->validate([
            "password"=> "required|confirmed|min:6",
        ]);

        return $this->userService->resetPassword($token, $request->password);
    }
}
