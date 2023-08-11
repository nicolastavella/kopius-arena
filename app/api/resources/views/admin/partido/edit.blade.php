@extends('admin.partido.partido')

@section('content')
<div class="row">
  <div class="col-md-12">
    <div class="card">
      <div class="card-header cool">
        <h2 class="card-title">Editar Partido</h2>
      </div>
      <form method="POST" enctype="multipart/form-data" class="form-horizontal">
        <div class="card-body">
          @csrf
          
          <div class="form-group row">
            <label for="fecha_id" class="col-sm-2 col-form-label">Fecha</label>
            <div class="col-sm-10">
              <select name="fecha_id" class="form-control">                
                <?php $fechas = App\Fecha::All(); ?>
                @foreach($fechas as $fecha)
                <option value="{{ $fecha->id }}"{{ $partido->fecha_id == $fecha->id ? ' selected="selected"':''}}>{{ $fecha->nombre }}</option>
                @endforeach
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label for="equipo1" class="col-sm-2 col-form-label">Equipo 1</label>
            <div class="col-sm-10">
              <select name="equipo1" class="form-control">
                <?php $equipos = App\Equipo::All(); ?>                
                @foreach($equipos as $equipo)
                <option value="{{ $equipo->id }}"{{$partido->equipo1 == $equipo->id ? ' selected="selected"':''}}>{{ $equipo->nombre }}</option>
                @endforeach
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label for="equipo2" class="col-sm-2 col-form-label">Equipo 2</label>
            <div class="col-sm-10">
              <select name="equipo2" class="form-control">
                <?php $equipos = App\Equipo::All(); ?>                
                @foreach($equipos as $equipo)
                <option value="{{ $equipo->id }}"{{$partido->equipo2 == $equipo->id ? ' selected="selected"':''}}>{{ $equipo->nombre }}</option>
                @endforeach
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label for="equipo2" class="col-sm-2 col-form-label">Ganador</label>
            <div class="col-sm-10">
                
              <select name="ganador" class="form-control"> 
                <option value=""{{ $partido->ganador ===  null ? ' selected="selected"':''}}></option>
                <option value="0"{{ $partido->ganador ===  0 ? ' selected="selected"':''}}>Empate</option>
                <option value="{{ $partido->equipo1 }}"{{$partido->ganador == $partido->equipo1 ? ' selected="selected"':''}}>{{ $partido->equipo_1->nombre }}</option>
                <option value="{{ $partido->equipo2 }}"{{$partido->ganador == $partido->equipo2 ? ' selected="selected"':''}}>{{ $partido->equipo_2->nombre }}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <button type="submit" class="btn btn-warning float-right">Guardar</button>
        </div>
      </form>
    </div>
  </div>
</div>
@endsection