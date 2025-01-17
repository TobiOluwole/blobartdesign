<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Exception;

class JWTMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request,  Closure $next)
    {
        $token = $request->cookie('jwt_token');

        try {

            if($request->route()->getActionName() == "App\Http\Controllers\UserController@logout"){
                return $next($request);
            }

            // Get the token from the 'jwt_token' cookie

            if (!$token) {
                return response()->json(['message' => 'Token not provided'], 401);
            }

            JWTAuth::setToken($token)->authenticate();
            $new = JWTAuth::refresh($token);
            JWTAuth::invalidate($token);

            // Attempt to authenticate using the token
            $user = JWTAuth::setToken($new)->authenticate();
            if (!$user) {
                return response()->json(['message' => 'User not found'], 401);
            }
            $request->$user = $user;

            $response = $next($request);
            $response->withCookie(cookie('jwt_token', $new, 60, '/', null, false, true));

        } catch (Exception $e) {
            if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenExpiredException) {
                return response()->json(['message' => 'Token expired'], 401);
            } elseif ($e instanceof \Tymon\JWTAuth\Exceptions\TokenInvalidException) {
                return response()->json(['message' => 'Token invalid'], 401);
            } else {
                return response()->json(['message' => 'Token error: ' . $e->getMessage()], 401)
                    ->withCookie(cookie('jwt_token', $token, 60, '/', null, false, true));
            }
        }

        return $response;
    }

    protected function isExcluded($request)
    {
        // List of excluded routes or actions
        $excludedActions = [
            'UserController.login',  // Example: 'UserController.login'
            'UserController.logout',
            'UserController.forgotPassword',
            'UserController.resetPassword',
        ];

        return in_array($request->route()->getActionName(), $excludedActions);
    }
}
