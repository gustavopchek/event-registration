
<nav class="menu">
	<div class="nav-wrapper">
		<a href="#" class="brand-logo">

		</a>
		<a href="#" data-activates="side-menu" class="button-collapse"><i class="material-icons">menu</i></a>
		<ul>
			<li><a href="#">Painel de Administração</a></li>
		</ul>
		<ul id="top-menu" class="right">
			<li>
				<a href="#" class="dropdown-button" data-activates="dropdown1" data-beloworigin="true" data-alignment="right" data-constrainWidth="false">
				<i class="material-icons">more_vert</i>
				</a>
			</li>
			
		</ul>
		<ul id="dropdown1" class="dropdown-content">
			<li {{ Request::is('admin/account/password') ? ' class=active' : null }}><a href="{{ route('admin.home.index') }}">Alterar Senha</a></li>
	    	<li><a href="{{ route('admin.logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">Sair</a></li>
	    	<form id="logout-form" action="{{ route('admin.logout') }}" method="POST" style="display: none;">{{ csrf_field() }}</form>
		</ul>
	</div>
	<ul id="side-menu" class="side-nav fixed">
		<li class="title"><a href="{{ route('admin.home.index') }}">
			<img src="{{asset('images/logo.png')}}" alt="">
		</a></li>
		<li {{ Request::is('admin') ? ' class=active' : null }}><a href="{{ route('admin.home.index') }}">Início</a></li>
		<li {{ Request::is('admin/events*') ? ' class=active' : null }}><a href="{{ route('admin.events.index') }}">Eventos</a></li>
		<li {{ Request::is('admin/participants*') ? ' class=active' : null }}><a href="{{ route('admin.participants.index') }}">Participantes</a></li>
		<li {{ Request::is('admin/enrollments*') ? ' class=active' : null }}><a href="{{ route('admin.enrollments.index') }}">Inscrições</a></li>
		<li {{ Request::is('admin/users*') ? ' class=active' : null }}><a href="{{ route('admin.admins.index') }}">Administradores</a></li>

	</ul>
</nav>