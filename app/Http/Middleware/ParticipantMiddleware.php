<?php

namespace App\Http\Middleware;

use Closure;

class ParticipantMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = 'participant')
    {
        if (\Auth::guard($guard)->check()) {
            $participant = \Auth::guard($guard)->user();
            \Auth::shouldUse('participant');
        }
        return $next($request);
    }
}
