@extends('admin.layouts.empty')

@section('title', 'Relatório de Inscrições')

@section('content')
    <div class="row" style="background-color: #fff; max-width: 21cm;">
        <div class="col s12 m10 offset-m1 l8 offset-l2">

            <div class="col s3">
                <img id="logo" src="{{asset('assets/images/logo.png')}}" alt="{{ env('APP_NAME') }}" style="max-width: 100%">
            </div>
            <div class="col s9">
                <h4>{{ $event->name }}</h4>
                <h5>Lista de Inscrições</h5>
            </div>
            <div class="clearfix"></div>
            <hr>
            <div class="col s12 center-align">
                <table class="striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Participante</th>
                            <th>E-mail</th>
                            <th>Status</th>
                            <th>Presença</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($enrollments as $enrollment)
                            <tr>
                                <td>{{ $enrollment->id }}</td>
                                <td>{{ $enrollment->participant()->get()->first()->name }}</td>
                                <td>{{ $enrollment->participant()->get()->first()->email }}</td>
                                <td>{{ $enrollment->status()->get()->first()->name }}</td>
                                <td><i class="material-icons">crop_square</i></td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>
                <div class="card-action">
                </div>
            </div>
        </div>
    </div>
@stop