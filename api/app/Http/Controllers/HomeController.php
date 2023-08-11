<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Partido;
use App\Fecha;
use App\Prode;
use Auth;
use DB;
class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }
    
    public function resultados()
    {        
        return view('home');
    }
    
    public function prode()
    {
        $fecha = Fecha::where(['estado'=>1])->first();
        $userid = Auth::id();
        if($fecha){
            $partidosfecha = Partido::where(['partidos.fecha_id'=>$fecha->id])->
                             leftjoin('prode', function ($join) use ($userid) {
                                $join->on('prode.partido_id', '=', 'partidos.id')
                                        ->where('prode.user_id', '=', $userid);
                                })->
                             get(['partidos.id',
                                 'partidos.equipo1',
                                 'partidos.equipo2',
                                 'partidos.fecha_id',
                                 'prode.ganador'
                                 ]);
        }else{
            $partidosfecha = false;
        }
        return view('prode', compact('partidosfecha', 'fecha'));
    }

    public function prodestore(Request $r)
    {

        $r->validate([
            '_token' => 'required',            
            'fecha_id' => 'required',
            '*[partido_id]' => 'required',
            '*[ganador]' => 'required',
        ], ['required'=>'Debe ingresar :attribute']);

        
        $user_id= Auth::id();
        foreach( Prode::where(['fecha_id'=>$r->fecha_id, 'user_id'=>$user_id])->get() as $old){
            $old->delete();
        }

        foreach($r->prode as $restultado){
            $prode = new Prode;
            $prode->user_id = $user_id;
            $prode->fecha_id = $r->fecha_id;
            $prode->partido_id = $restultado['partido_id'];
            $prode->ganador = $restultado['ganador']; //id del equipo o cero si empate
            $prode->save();
        }
        
        $msg='Prode guardado con exito';
        return redirect()->to('prode');
    }
    
    public function tabla()
    {
        $resultados =  DB::table('prode')->
            select(DB::raw('SUM(puntos) AS puntos'), 'users.id', 'users.name', 'users.email')->
            join('partidos', function ($join) {
                $join->on('prode.partido_id', '=', 'partidos.id')->
                    on('prode.ganador', '=', 'partidos.ganador');
                })->
            join('fechas', 'prode.fecha_id','=', 'fechas.id')->
            join('users', 'user_id','=', 'users.id')->
            where(['fechas.estado'=>2])-> //cargada
            groupby( 'users.id', 'users.name', 'users.email')->
            orderby('puntos','desc')->
            get();
        
        return view('tabla', compact('resultados'));
    }
}
