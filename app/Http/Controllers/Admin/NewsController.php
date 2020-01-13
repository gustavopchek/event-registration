<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

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

        return view('admin.news.index', ['news' => $news]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.news.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $file = array('image' => $request->image);
        $rules = array('image' => 'required');
        $validator = \Validator::make($file, $rules);

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }else{
            if ($request->image->isValid()) {
                $this->validate($request, [
                    'title' => 'required',
                    'content' => 'required',
                    // 'slug' => 'alpha_dash|min:3|max:100|unique:news',
                ]);

                $input = [
                    'title' => $request->title,
                    'content' => $request->content,
                    // 'slug' => $request->slug,
                    'imagepath' => $request->image->store('public/news'),
                ];

                $newsItem = new \App\News;
                $newsItem->fill($input);

                $newsItem->save();


                \Session::flash('status', 'Notícia adicionada com sucesso.');

                return redirect()->route('admin.news.index');
            }
            else {
                return redirect()->back()->withErrors('A imagem enviada é invalida. Ela deve ser no formado JPG/JPEG e conter no máximo 2MB.');
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $news = \App\News::findOrFail($id);
        return view('admin.news.show')->withNews($news);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $news = \App\News::findOrFail($id);
        return view('admin.news.edit')->withNews($news);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $newsItem = \App\News::findOrFail($id);

        $this->validate($request, [
            'title' => 'required',
            'content' => 'required',
            // 'slug' => 'alpha_dash|min:3|max:100|unique:news,slug,'.$newsItem->id,
        ]);

        $input = $request->all();

        if($request->image){
            $file = array('image' => $request->image);
            $rules = array('image' => 'required');
            $validator = \Validator::make($file, $rules);

            if($validator->fails()){
                return redirect()->back()->withErrors($validator)->withInput();
            }else{

                \Storage::delete($newsItem->imagepath);

                $input['imagepath'] = $request->image->store('public/news');
            }
            
        }

        $newsItem->fill($input)->save();

        \Session::flash('status', 'Notícia atualizada com sucesso.');

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
            $newsItem = \App\NewsItem::findOrFail($id);

            $newsItem->delete();

            \Session::flash('status', 'Categoria excluído com sucesso.');

            return redirect()->route('admin.advertisers.index');
    }
}
