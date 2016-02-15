<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('pages.blank');
});

//Special Routes
Route::group(['prefix' => 'errors'], function () {
	Route::get('{errorCode}', function ($errorCode) {
	    return view('errors.error',['error' => $errorCode]);
	});
});

Route::get('/cache-flush', function () {
	ResponseCache::flush();
	return "ok";
});




/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => ['web']], function () {

	Route::auth();
    Route::get('/home', 'HomeController@index');
    
    //Blog using contentful
    Route::resource('blog', 'Blog');

	//General routing - View files need to follow the correct patern 
	Route::get('/{param1}/{param2}', function ($param1,$param2) {
	    return view($param1.'.'.$param2);
	});
});
