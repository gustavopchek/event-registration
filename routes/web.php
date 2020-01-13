<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware(['web', 'participant'])->group(function () {
	// Json
    Route::get('/states/{id}/cities', ['as' => 'states.cities', 'uses' => 'StateController@cities']);

});

Route::middleware(['web', 'guest'])->group(function () {


	Route::get('/login', 'ParticipantAuth\LoginController@showLoginForm')->name('login');
	Route::post('/login', 'ParticipantAuth\LoginController@login');
	Route::get('/cadastro', 'ParticipantAuth\RegisterController@showRegistrationForm')->name('participant.register');
	Route::post('/cadastro', 'ParticipantAuth\RegisterController@register');

	Route::post('/password/email', 'ParticipantAuth\ForgotPasswordController@sendResetLinkEmail')->name('password.request');
	Route::post('/password/reset', 'ParticipantAuth\ResetPasswordController@reset')->name('password.reset');
	Route::get('/recuperar-senha', 'ParticipantAuth\ForgotPasswordController@showLinkRequestForm')->name('password.email');
	Route::get('/nova-senha/{token}', 'ParticipantAuth\ResetPasswordController@showResetForm')->name('password.new');
});



Route::middleware(['web', 'participant', 'auth:participant'])->group(function () {
	
	Route::get('/', ['as' => 'home.index', 'uses' => 'HomeController@index']);

    // Event enrollment
    Route::get('/evento/{code}/inscrever', ['as' => 'events.enroll', 'uses' => 'EventController@enroll']);

    Route::post('/evento/inscrever', ['as' => 'events.createEnrollment', 'uses' => 'EventController@createEnrollment']);

    Route::post('/evento/{code}/cancelarInscricao', ['as' => 'enrollments.cancel', 'uses' => 'EventController@createEnrollment']);

    Route::post('/sair', 'ParticipantAuth\LoginController@logout')->name('participant.logout');

    Route::get('/minha-conta', ['as' => 'participant.account', 'uses' => 'ParticipantController@account']);
    Route::patch('/minha-conta', ['as' => 'participant.update', 'uses' => 'ParticipantController@update']);

    Route::get('alterar-senha', ['as' => 'participant.password', 'uses' => 'ParticipantController@editPassword']);
    Route::patch('alterar-senha', ['as' => 'participant.password', 'uses' => 'ParticipantController@updatePassword']);

    // Contact
    Route::get('/participante/contato', ['as' => 'contact.participant', 'uses' => 'ContactController@participant']);
    Route::get('/contato', ['as' => 'contact.guest', 'uses' => 'ContactController@guest']);
    Route::post('/participante/contato/enviar', ['as' => 'contact.participant.send', 'uses' => 'ContactController@sendMail']);

    // Participant enrollment list
    Route::get('/inscricoes', ['as' => 'enrollments.index', 'uses' => 'EnrollmentController@index']);
    Route::get('/inscricoes/{code}/ver', ['as' => 'enrollments.show', 'uses' => 'EnrollmentController@show']);

    Route::get('/inscricoes/{code}/checkout', ['as' => 'enrollments.checkout', 'uses' => 'EnrollmentController@checkout']);

    Route::post('/inscricoes/{code}/checkout', ['as' => 'enrollments.submit', 'uses' => 'EnrollmentController@submit']);

    // Route::patch('/inscricoes/{id}/pagamento', ['as' => 'enrollments.payment', 'uses' => 'EnrollmentController@generatePayment']);
    Route::get('/inscricoes/{code}/sucesso/', ['as' => 'enrollments.success', 'uses' => 'EnrollmentController@success']);

    // Cancelamento
    Route::get('/enrollment/{code}/cancelar', ['as' => 'enrollments.cancel', 'uses' => 'EnrollmentController@getCancel']);
    Route::patch('/enrollment/{code}/cancelar', ['as' => 'enrollments.cancel', 'uses' => 'EnrollmentController@patchCancel']);

    // Receber código da transação
    Route::get('/inscricoes/return', ['as' => 'enrollments.return', 'uses' => 'EnrollmentController@paymentReturn']);
});

Route::middleware(['web', 'cors'])->group(function () {
    
    Route::post('/enrollments/notification', ['as' => 'enrollments.notification', 'uses' => 'EnrollmentController@notification']);

    // Verificar pagamentos expirados
    Route::get('/inscricoes/verification', ['as' => 'enrollments.verification', 'uses' => 'EnrollmentController@paymentVerification']);
    

});




// Pages

Route::get('/termos-de-uso', ['as' => 'pages.terms', 'uses' => 'PagesController@terms']);
Route::get('/politica-de-privacidade', ['as' => 'pages.privacy', 'uses' => 'PagesController@privacy']);


Route::get('/about', ['as' => 'pages.about', 'uses' => 'PagesController@about']);
Route::get('/services', ['as' => 'pages.services', 'uses' => 'PagesController@services']);

Route::get('/portfolio', ['as' => 'pages.portfolio', 'uses' => 'PagesController@portfolio']);
Route::get('/portfolio-item', ['as' => 'pages.portfolioitem', 'uses' => 'PagesController@portfolioItem']);

Route::get('/news', ['as' => 'pages.news', 'uses' => 'PagesController@news']);
Route::get('/news-item', ['as' => 'pages.newsitem', 'uses' => 'PagesController@newsItem']);

Route::get('/faq', ['as' => 'pages.faq', 'uses' => 'PagesController@faq']);
Route::get('/pricing', ['as' => 'pages.pricing', 'uses' => 'PagesController@pricing']);

// Route::get('/news', ['as' => 'news.index', 'uses' => 'NewsController@index']);
// Route::get('/news-item', ['as' => 'news.show', 'uses' => 'NewsController@show'])


Route::get('/contato', ['as' => 'contact.index', 'uses' => 'ContactController@index']);
Route::post('/contato', ['as' => 'contact', 'uses' => 'ContactController@contact']);

Route::post('/subscribe', ['as' => 'subscribe', 'uses' => 'NewsletterController@subscribe']);


// Route::resource('photo', 'PhotoController', ['only' => [
//     'index', 'show'
// ]]);



//Authentication
// Authentication routes...
// Route::get('admin/login', ['as' =>'login', 'uses' => 'Auth\AuthController@getLogin']);
// Route::post('admin/login', ['as' =>'login', 'uses' => 'Auth\AuthController@postLogin']);
// Route::get('admin/logout', ['as' => 'logout', 'uses' => 'Auth\AuthController@getLogout']);

// Route::get('admin/account/password', ['as' => 'account.password', 'uses' => 'Admin\ParticipantController@editPassword']);
// Route::patch('admin/account/password', ['as' => 'account.password', 'uses' => 'Admin\ParticipantController@updatePassword']);




Route::group(['prefix' => 'admin', 'middleware' => ['web', 'admin']], function () {

    // Home
    Route::get('/', ['as' => 'admin.home.index', 'uses' => 'Admin\HomeController@index']);
    Route::post('/settings/update', ['as' => 'settings.update', 'uses' => 'Admin\HomeController@updateSettings']);

    // Events
    Route::get('/events', ['as' => 'admin.events.index', 'uses' => 'Admin\EventController@index']);
    Route::get('/events/create', ['as' => 'admin.events.create', 'uses' => 'Admin\EventController@create']);
    Route::post('/events/store', ['as' => 'admin.events.store', 'uses' => 'Admin\EventController@store']);
    Route::get('/events/show/{id}', ['as' => 'admin.events.show', 'uses' => 'Admin\EventController@show']);
    Route::post('/events/reports/{id}', ['as' => 'admin.events.reports', 'uses' => 'Admin\EventController@reports']);
    Route::get('/events/edit/{id}', ['as' => 'admin.events.edit', 'uses' => 'Admin\EventController@edit']);
    Route::patch('/events/update{id}', ['as' => 'admin.events.update', 'uses' => 'Admin\EventController@update']);
    Route::delete('/events/destroy/{id}', ['as' => 'admin.events.destroy', 'uses' => 'Admin\EventController@destroy']);

    // Enrollments
    Route::get('/enrollments', ['as' => 'admin.enrollments.index', 'uses' => 'Admin\EnrollmentController@index']);
    Route::get('/enrollments/create', ['as' => 'admin.enrollments.create', 'uses' => 'Admin\EnrollmentController@create']);
    Route::post('/enrollments/store', ['as' => 'admin.enrollments.store', 'uses' => 'Admin\EnrollmentController@store']);
    Route::get('/enrollments/show/{id}', ['as' => 'admin.enrollments.show', 'uses' => 'Admin\EnrollmentController@show']);
    Route::get('/enrollments/edit/{id}', ['as' => 'admin.enrollments.edit', 'uses' => 'Admin\EnrollmentController@edit']);
    Route::patch('/enrollments/update{id}', ['as' => 'admin.enrollments.update', 'uses' => 'Admin\EnrollmentController@update']);
    Route::delete('/enrollments/destroy/{id}', ['as' => 'admin.enrollments.destroy', 'uses' => 'Admin\EnrollmentController@destroy']);

    // Participants
    Route::get('/participants', ['as' => 'admin.participants.index', 'uses' => 'Admin\ParticipantController@index']);
    Route::get('/participants/create', ['as' => 'admin.participants.create', 'uses' => 'Admin\ParticipantController@create']);
    Route::post('/participants/store', ['as' => 'admin.participants.store', 'uses' => 'Admin\ParticipantController@store']);
    Route::get('/participants/show/{id}', ['as' => 'admin.participants.show', 'uses' => 'Admin\ParticipantController@show']);
    Route::get('/participants/edit/{id}', ['as' => 'admin.participants.edit', 'uses' => 'Admin\ParticipantController@edit']);
    Route::patch('/participants/update{id}', ['as' => 'admin.participants.update', 'uses' => 'Admin\ParticipantController@update']);
    Route::delete('/participants/destroy/{id}', ['as' => 'admin.participants.destroy', 'uses' => 'Admin\ParticipantController@destroy']);

    // Users
    Route::get('/users', ['middleware' => 'admin', 'as' => 'admin.admins.index', 'uses' => 'Admin\AdminController@index']);
    Route::get('/users/create', ['middleware' => 'admin', 'as' => 'admin.admins.create', 'uses' => 'Admin\AdminController@create']);
    Route::post('/users/store', ['middleware' => 'admin', 'as' => 'admin.admins.store', 'uses' => 'Admin\AdminController@store']);
    Route::get('/users/show/{id}', ['middleware' => 'admin', 'as' => 'admin.admins.show', 'uses' => 'Admin\AdminController@show']);
    Route::get('/users/edit/{id}', ['middleware' => 'admin', 'as' => 'admin.admins.edit', 'uses' => 'Admin\AdminController@edit']);
    Route::patch('/users/update{id}', ['middleware' => 'admin', 'as' => 'admin.admins.update', 'uses' => 'Admin\AdminController@update']);
    Route::delete('/users/destroy/{id}', ['middleware' => 'admin', 'as' => 'admin.admins.destroy', 'uses' => 'Admin\AdminController@destroy']);

 //    Route::get('/account/password', ['as' => 'account.password', 'uses' => 'Admin\AdminController@editPassword']);
	// Route::patch('/account/password', ['as' => 'account.password', 'uses' => 'Admin\AdminController@updatePassword']);

	
	Route::post('/logout', 'AdminAuth\LoginController@logout')->name('admin.logout');



});

Route::group(['prefix' => 'admin', 'middleware' => ['web', 'guest']], function () {
	Route::get('/login', 'AdminAuth\LoginController@showLoginForm')->name('admin.login');
	Route::post('/login', 'AdminAuth\LoginController@login');
	// Route::get('/register', 'AdminAuth\RegisterController@showRegistrationForm')->name('admin.register');
	// Route::post('/register', 'AdminAuth\RegisterController@register');

	// Route::post('/password/email', 'AdminAuth\ForgotPasswordController@sendResetLinkEmail')->name('admin.password.request');
	// Route::post('/password/reset', 'AdminAuth\ResetPasswordController@reset')->name('password.email');
	// Route::get('/password/reset', 'AdminAuth\ForgotPasswordController@showLinkRequestForm')->name('admin.password.reset');
	// Route::get('/password/reset/{token}', 'AdminAuth\ResetPasswordController@showResetForm');
});