<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class EventController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        $events = \App\Event::orderBy('id','DESC')->paginate(10);
        return view('admin.events.index', ['events' => $events]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        return view('admin.events.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request)
    {


        $price = str_replace('.', '', $request->price);
        $price = str_replace(',', '.', $request->price);
        $request->merge(array('price' => $price));

        $this->validate($request, [
            'name' => 'required',
            'code' => 'unique:events',
            'date_event' => 'required|date_format:"d/m/Y"',
            'time_event' => 'required|date_format:"H:i',
            'date_start_enrollment' => 'required|date_format:"d/m/Y"',
            'time_start_enrollment' => 'required|date_format:"H:i',
            'date_end_enrollment' => 'required|date_format:"d/m/Y"|after:date_start_enrollment',
            'time_end_enrollment' => 'required|date_format:"H:i',
            'price' => array('required', 'regex:/^\d*(\.\d{2})?$/'),
            'spaces' => 'required',
            'manage_installments' => 'required|boolean',
            'max_installments' => 'integer',
        ]);

        if ($request->image) {
            $file = array('image' => $request->image);
            $rules = array('image' => 'required');
            $validator = \Validator::make($file, $rules);

            if ($validator->fails()) {
                return redirect()->back()->withErrors($validator)->withInput();
            }
        }

        if(empty($request->code)){
            $code = uniqid("e-");
        }else{
            $code = $request->code;
        }

        $input = [
            'name' => $request->name,
            'code' => $code,
            'event_datetime' => \Carbon\Carbon::createFromFormat("d/m/Y H:i", $request->date_event . ' ' . $request->time_event),
            'start_enrollment' => \Carbon\Carbon::createFromFormat("d/m/Y H:i", $request->date_start_enrollment . ' ' . $request->time_start_enrollment),
            'end_enrollment' => \Carbon\Carbon::createFromFormat("d/m/Y H:i", $request->date_end_enrollment . ' ' . $request->time_end_enrollment),
            'price' => $request->price,
            'spaces' => $request->spaces,
            'description' => $request->description,
            'imagepath' => $request->image ? $request->image->store('public/events') : "",
            'manage_installments' => $request->manage_installments,
            'max_installments' => $request->max_installments,
        ];

        \App\Event::create($input);

        \Session::flash('status', 'Evento criado com sucesso.');

        return redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        $event = \App\Event::findOrFail($id);
        $enrollments = $event->enrollments()->orderBy('id','DESC')->paginate(15);

        return view('admin.events.show')->withEvent($event)->withEnrollments($enrollments);
    }

    /**
     * Display the specified resource.
     *
     * @param  Request  $request
     * @param  int  $id
     * @return Response
     */
    public function reports(Request $request, $id)
    {
        $event = \App\Event::findOrFail($id);

        if($request->status){
            $enrollments = $event->enrollments()->whereIn("status_id", $request->status)->orderBy('name','ASC');
        }else{
            $enrollments = $event->enrollments()->orderBy('name','ASC');

        }

        return view('admin.events.reports')->withEvent($event)->withEnrollments($enrollments->get());
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        $event = \App\Event::findOrFail($id);
        
        return view('admin.events.edit')->withEvent($event);
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
        $event = \App\Event::findOrFail($id);


        $price = str_replace('.', '', $request->price);
        $price = str_replace(',', '.', $request->price);
        $request->merge(array('price' => $price));

        $this->validate($request, [
            'name' => 'required',
            'code' => 'unique:events,code,'.$event->id,
            'date_event' => 'required|date_format:"d/m/Y"',
            'time_event' => 'required|date_format:"H:i',
            'date_start_enrollment' => 'required|date_format:"d/m/Y"',
            'time_start_enrollment' => 'required|date_format:"H:i',
            'date_end_enrollment' => 'required|date_format:"d/m/Y"|after:date_start_enrollment',
            'time_end_enrollment' => 'required|date_format:"H:i',
            'price' => array('required', 'regex:/^\d*(\.\d{2})?$/'),
            'spaces' => 'required',
            'manage_installments' => 'required|boolean',
            'max_installments' => 'integer',
        ]);

        if (\Request::file('image') && !\Request::file('image')->isValid()) {
            \Session::flash('status', 'A imagem selecionada é inválida.');
            return redirect()->back();
        }

        if(empty($request->code)){
            $code = uniqid("e-");
        }else{
            $code = $request->code;
        }
        $input = [
            'name' => $request->name,
            'code' => $code,
            'event_datetime' => \Carbon\Carbon::createFromFormat("d/m/Y H:i", $request->date_event . ' ' . $request->time_event),
            'start_enrollment' => \Carbon\Carbon::createFromFormat("d/m/Y H:i", $request->date_start_enrollment . ' ' . $request->time_start_enrollment),
            'end_enrollment' => \Carbon\Carbon::createFromFormat("d/m/Y H:i", $request->date_end_enrollment . ' ' . $request->time_end_enrollment),
            'price' => $request->price,
            'spaces' => $request->spaces,
            'description' => $request->description,
            'manage_installments' => $request->manage_installments,
            'max_installments' => $request->max_installments,
        ];

        if(\Request::file('image')){
            $destinationPath = 'media/images';
            $extension = \Request::file('image')->getClientOriginalExtension();
            $fileName = uniqid("event-").'.'.$extension;
            \Request::file('image')->move($destinationPath, $fileName);

            $input["imagepath"] = $destinationPath . "/" . $fileName;
        }

        $event->fill($input)->save();

        \Session::flash('status', 'Evento atualizado com sucesso.');

        return redirect()->back();
    }

    // /**
    //  * Remove the specified resource from storage.
    //  *
    //  * @param  int  $id
    //  * @return Response
    //  */
    // public function destroy(Request $request, $id)
    // {

    //     $event = \App\Event::findOrFail($id);

    //     $event->delete();

    //     \Session::flash('status', 'Evento excluído com sucesso.');

    //     return redirect()->route('admin.events.index');
    // }
}
