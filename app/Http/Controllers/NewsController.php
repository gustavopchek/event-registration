<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NewsController extends Controller
{

	/**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $news = \App\News::orderBy('id','DESC')->paginate(10);

        return view('news.index', ['news' => $news]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        $newsItem = \App\News::where('slug', $slug)->firstOrFail();
        return view('news.show')->withNewsItem($newsItem);
    }
}
