@extends('admin.layouts.layout')

@section('title', 'Página Principal')

@section('sidebar')
    @parent

    <p>This is appended to the master sidebar.</p>
@endsection

@section('content')

	<div class="row">
        <div class="col s6 m4 l3">
            <a href="{{ route('admin.events.index') }}" class="card">
                <div class="card-content">
                    <span class="card-title">
                        <i class="material-icons medium">star</i>
                    </span>
                    Eventos
                </div>
            </a>
        </div>
        <div class="col s6 m4 l3">
            <a href="{{ route('admin.enrollments.index') }}" class="card">
                <div class="card-content">
                    <span class="card-title">
                        <i class="material-icons medium">notes</i>
                    </span>
                    Inscrições
                </div>
            </a>
		</div>
		<div class="col s6 m4 l3">
			<a href="{{ route('admin.participants.index') }}" class="card">
				<div class="card-content">
					<span class="card-title">
						<i class="material-icons medium">account_circle</i>
					</span>
					Participantes
				</div>
			</a>
		</div>
		<div class="col s6 m4 l3">
			<a href="{{ route('admin.admins.index') }}" class="card">
				<div class="card-content">
					<span class="card-title">
						<i class="material-icons medium">account_circle</i>
					</span>
					Admins
				</div>
			</a>
		</div>
    </div>

@endsection
