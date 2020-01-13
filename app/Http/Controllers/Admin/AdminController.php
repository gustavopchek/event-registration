<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class AdminController extends BaseController
{

    /**
     * Show the form for editing the admin's password.
     *
     * @return Response
     */
    public function editPassword()
    {
        $admin = \Auth::admin();

        return view('admin.admins.password')->withAdmin($admin);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  int  $id
     * @return Response
     */
    public function updatePassword(Request $request)
    {
        $admin = \Auth::admin();

        $this->validate($request, [
            'current_password' => 'required',
            'password' => 'required|alpha_num|min:6|max:32',
            'password_confirmation' => 'required|min:6|max:32|same:password'
        ]);

        if(!\Hash::check($request->current_password, \Auth::admin()->password)){
            return redirect()->back()->withErrors('Senha atual informada incorretamente.');
        }

        $input = [
            'password' => bcrypt($request->password)
        ];

        $admin->fill($input)->save();

        \Session::flash('status', 'Senha alterada com sucesso.');

        return redirect()->route('admin.home.index');
    }

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $admins = \App\Admin::orderBy('id','DESC')->paginate(15);
        return view('admin.admins.index', ['admins' => $admins]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        return view('admin.admins.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email',
            'name' => 'required',
            'password' => 'required|alpha_num|min:6|max:32',
            'password_confirmation' => 'required|min:6|max:32|same:password'
        ]);
        $input = [
            'email' => $request->email,
            'name' => $request->name,
            'admin' => $request->admin == "on" ? true : false,
            'password' => bcrypt($request->password)
            // 'password' => $request->password
        ];

        \App\Admin::create($input);

        \Session::flash('status', 'Usuário adicionado com sucesso.');

        return redirect()->route('admin.admins.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        $admin = \App\Admin::findOrFail($id);

        return view('admin.admins.show')->withAdmin($admin);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        $admin = \App\Admin::findOrFail($id);

        return view('admin.admins.edit')->withAdmin($admin);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  int  $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        $admin = \App\Admin::findOrFail($id);

        $this->validate($request, [
            'name' => 'required',
        ]);

        $input = [
            'name' => $request->name,
            'admin' => $request->admin == "on" ? true : false,
        ];

        $admin->fill($input)->save();

        \Session::flash('status', 'Usuário atualizado com sucesso.');

        return redirect()->route('admin.admins.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy(Request $request, $id)
    {
        if($id == \Auth::guard('admin')->user()->id){
            return redirect()->back()->withErrors('Você não pode excluir sua própria conta de usuário.');
        }

        $admin = \App\Admin::findOrFail($id);

        $admin->delete();

        \Session::flash('status', 'Usuário excluído com sucesso.');

        return redirect()->route('admin.admins.index');
    }
}
