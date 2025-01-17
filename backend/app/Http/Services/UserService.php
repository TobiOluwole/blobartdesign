<?php

namespace App\Http\Services;

use App\Models\User;
use App\Models\PasswordResetToken;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Password;
use Tymon\JWTAuth\Facades\JWTAuth;

use App\Http\Services\NDResponsesService;

class UserService
{

    private $responseService;

    public function __construct(NDResponsesService $responseService){
        $this->responseService = $responseService;
    }

    protected function respondWithToken($token)
    {
        return response()
            ->json([
//            'access_token' => $token,
//            'token_type' => 'bearer',
//            'expires_in' =>  60 * 60
        ])->withCookie(cookie('jwt_token', $token, 60, '/', null, false, true));
    }

    public function refreshToken()
    {
        $old = JWTAuth::getToken();
        JWTAuth::factory()->setTTL(60);
        $new = JWTAuth::refresh();
        JWTAuth::invalidate($old);
        return $this->respondWithToken(token: $new);
    }

    public function login($email, $password){

        JWTAuth::factory()->setTTL(60);
        $credentials = JWTAuth::attempt(["email"=> $email,"password"=> $password]);

        if($credentials){
            return $this->respondWithToken($credentials);
        }else{
            return response()->json(null, 401);
//            return response()->json([
//                'message' => $this->responseService->getResponse('401'),
//            ], 401);
        }
    }

    public function myToken()
    {
        return response()->json(JWTAuth::user());
    }

    public function logout($token)
    {
        if(!$token){
            return response()->json(null, 401);
        }

        JWTAuth::setToken($token)->invalidate(true);

        return response()->json(null, 200)->withCookie(cookie('jwt_token', '', 60, '/', null, false, true));
    }

    public function forgotPassword($email){
        $user = User::where('email', $email)->first();

        if($user){
            $status = Password::sendResetLink(
                ['email' => $email],
                function ($user){
                    $tokenInfo = PasswordResetToken::where('email', $user->email)->first();
                    $urlToken = urlencode($tokenInfo->token);
                    $link = "http://localhost:3000/admin/forgot-password/$urlToken";

                    Mail::html(
                        "
                                Hi,$user->name <br />
                                you requested to change your password.<br /><br />
                                Please click this link to proceed.<br />
                                <a href='$link'>$link</a>
                                ",
                        function ($message) use ($user, $tokenInfo) {
                            $message->to($user->email)
                                ->subject('Forgot Password Email');
                        });
                }
            );

            if( $status == Password::RESET_THROTTLED){
                return response()->json(null, 409);
            }
            if( $status !== Password::RESET_LINK_SENT){
                return response()->json(null, 400);
            }
        }

        return response()->json(null, 200);
    }

    public function resetPassword($token, $password){
        $expirationTime = Carbon::now()->subHour();

        $tokenInfo =
            PasswordResetToken::
            where('token', $token)
                ->where('created_at', '>=', $expirationTime )
                ->first();

        if($tokenInfo){
            $user = User::where('email', $tokenInfo->email)->first();
            $user->password = bcrypt($password);
            $user->save();

            PasswordResetToken::
            where('token', $token)
                ->where('created_at', '>=', $expirationTime )
                ->delete();

            return response()->json(null, 200);
        }

        return response()->json(null, 419);


    }
}
