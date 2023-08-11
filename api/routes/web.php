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

Route::get('/', function () {
    //return view('scoreboard');
});

//Route::get('/scoreboard', function () {
//    
//    return [
//        ['id'=>1, 'nick'=>'juan', 'multibonus'=>1.5, 'totlscore'=>8129.6],
//        ['id'=>2, 'nick'=>'pepe', 'multibonus'=>1.5, 'totlscore'=>6789.6],
//        ['id'=>3, 'nick'=>'ernesto', 'multibonus'=>1.5, 'totlscore'=>5679.6],
//        ['id'=>4, 'nick'=>'qwerty', 'multibonus'=>1.5, 'totlscore'=>129.6],
//    ];
//});

Route::get('/scoreboard', 'UsuarioController@board');

//Route::get('/scoreboard', function () {
//    
//    return [
//        ['id'=>1, 'nick'=>'juan', 'multibonus'=>1.5, 'totlscore'=>8129.6],
//        ['id'=>2, 'nick'=>'pepe', 'multibonus'=>1.5, 'totlscore'=>6789.6],
//        ['id'=>3, 'nick'=>'ernesto', 'multibonus'=>1.5, 'totlscore'=>5679.6],
//        ['id'=>4, 'nick'=>'qwerty', 'multibonus'=>1.5, 'totlscore'=>129.6],
//    ];
//});


Route::post('/user/finish', 'UsuarioController@finish');

//Route::post('/user/finish', function () {
//    $ret = ['id'=>1];
//    return $ret;
//});

Route::get('/user/email/{id}/{email}', function () {
//    $ret = ['id'=>1];
    return 'send mail';
});

Route::get('/user/confirm/{id}/{code}', function () {
    $ret = ['id'=>1];
    return 'User confirmed';
});


//Route::get('/admin/equipo', 'EquipoController@index');
//Route::get('/admin/equipo/create', 'EquipoController@create');
//Route::post('/admin/equipo/create', 'EquipoController@store');
//Route::get('/admin/equipo/edit/{id}', 'EquipoController@edit');
//Route::post('/admin/equipo/edit/{id}', 'EquipoController@update');
//Route::delete('/admin/equipo/delete/{id}', 'EquipoController@destroy');
