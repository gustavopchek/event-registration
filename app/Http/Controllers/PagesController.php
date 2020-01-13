<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class PagesController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Pages Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the static pages
    | and associated functions
    |
    */


    /**
     * Terms
     *
     * @return Response
     */
    public function terms()
    {
        return view("pages.terms");
    }

    /**
     * Privacy
     *
     * @return Response
     */
    public function privacy()
    {
        return view("pages.privacy");
    }

    /**
     * About
     *
     * @return Response
     */
    public function about()
    {
        return view("pages.about");
    }

    /**
     * Services
     *
     * @return Response
     */
    public function services()
    {
        return view("pages.services");
    }

    /**
     * Portfolio
     *
     * @return Response
     */
    public function portfolio()
    {
        return view("pages.portfolio");
    }

    /**
     * Portfolio Item
     *
     * @return Response
     */
    public function portfolioitem()
    {
        return view("pages.portfolioitem");
    }

    /**
     * News
     *
     * @return Response
     */
    public function news()
    {
        return view("pages.news");
    }

    /**
     * News Item
     *
     * @return Response
     */
    public function newsitem()
    {
        return view("pages.newsitem");
    }

    /**
     * FAQ
     *
     * @return Response
     */
    public function faq()
    {
        return view("pages.faq");
    }

    /**
     * Pricing
     *
     * @return Response
     */
    public function pricing()
    {
        return view("pages.pricing");
    }

}
