<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Usuarios;
use Carbon\Carbon;
use Illuminate\Database\QueryException;

class UsuarioController extends Controller
{
  
    public function board(Request $r) {
        $data = Usuarios::orderBy('totalscore', 'desc')->get();
        return response()->json($data);
    }
    
    public function finish(Request $r) {
        $usuario = new Usuarios;        
        $usuario->nickname = $r->nick;
        $usuario->totalscore = $r->score;
        $usuario->save();
        return response()->json($usuario);
    }
    
    public function save(Request $r) {
        $r->validate([
            '_token' => 'required',
            'dni' => 'required',
            'nombre' => 'required',
            'apellido' => 'required',
            'telefono' => 'required',
        ], ['required'=>'Debe ingresar :attribute']);
        
        $usuario = new Usuarios;        
        $usuario->dni = $r->dni;
        $usuario->nombre = $r->nombre;
        $usuario->apellido = $r->apellido;
        $usuario->telefono = $r->telefono;        
        $usuario->save();
        return $usuario;
    }
    

    public function edit($id) {        
        $usuario = Usuarios::find($id);        
        if (empty($usuario)) {
            return redirect()->to('/admin/usuario');
        }        
        return view("admin.usuario.edit", compact("usuario"));
    }

    public function update(Request $r, $id) {

        $r->validate([
            '_token' => 'required',
            'dni' => 'required',
            'nombre' => 'required',
            'apellido' => 'required',
            'telefono' => 'required',
        ], ['required'=>'Debe ingresar :attribute']);

        $usuario = Usuarios::find($id);
        
        if (empty($usuario)) {
            return redirect()->to('/admin/usuario');
        }
        $usuario->dni = $r->dni;
        $usuario->nombre = $r->nombre;
        $usuario->apellido = $r->apellido;
        $usuario->telefono = $r->telefono;
        
        $usuario->update();

        return redirect()->to('/admin/usuario');
    }

    public function destroy($id) {
        $usuario = Usuarios::find($id);
        if(empty($usuario)){
            return redirect()->to('/admin/usuario');
        }
        try{
          $usuario->delete();
        } catch (QueryException $ex) {
          return back()->with('error', 'No se puede borrar el item asegurese de que no esta en uso');
        };
        return redirect()->to('/admin/usuario');
    }


    public function usuario_by_dni(Request $r) {
      $usuario = Usuarios::where('dni','=',$r->dni)->first();
      if(empty($usuario)){
          return redirect()->to('/usuario/registrar');
      }else{
        $numero = $this->crear_turno($r, $usuario);
        return view("gracias", compact("numero"));
      }
    }

    public function registrar(Request $r) {
      $usuario = Usuarios::where('dni','=',$r->dni)->first();
      if(empty($usuario)){
        $usuario = $this->save($r);
      }else{
      }
      $numero = $this->crear_turno($r, $usuario);
      // sacar turno
      return view("gracias", compact("numero"));
    }
    
    public function crear_turno(Request $r, Usuarios $c) {
        $turno = new Turno;
        $turno->usuario_id = $c->id;
        $turno->save();
        $turnos = Turno::whereDate('created_at', Carbon::today())->get(); 
        return $turnos->count();
    }
}
