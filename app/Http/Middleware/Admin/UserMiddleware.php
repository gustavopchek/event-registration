<?php

namespace App\Http\Middleware\Admin;

use Closure;

class UserMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // if (\Auth::user()->guest()) {
        //     if ($request->ajax()) {
        //         return response('Unauthorized.', 401);
        //     } else {
        //         return redirect()->guest('admin/login');
        //     }
        // }

        // if(\Auth::user()->get()->admin == false){
        //     return redirect()->route('admin.home.index')->withErrors("Você não possui permissão para acessar esta área.");
        // }
        return $next($request);
    }
}
