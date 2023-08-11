@extends('admin.partido.partido')

@section('content')
<div class="row">
  <div class="col-md-12">
    <div class="card">
      <div class="card-header cool">
        <h2 class="card-title">Nuevo Partido</h2>
      </div>
      <form method="POST" enctype="multipart/form-data" class="form-horizontal">
        <div class="card-body">
          @csrf
          
          <div class="form-group row">
            <label for="fecha_id" class="col-sm-2 col-form-label">Fecha</label>
            <div class="col-sm-10">
              <select name="fecha_id" class="form-control">                
                <?php $fechas = App\Fecha::where(['estado'=>0])->get(); ?>
                @foreach($fechas as $fecha)
                <option value="{{ $fecha->id }}"{{old('fecha_id') == $fecha->id ? ' selected="selected"':''}}>{{ $fecha->nombre }}</option>
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
                <option value="{{ $equipo->id }}"{{old('equipo1') == $equipo->id ? ' selected="selected"':''}}>{{ $equipo->nombre }}</option>
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
                <option value="{{ $equipo->id }}"{{old('equipo2') == $equipo->id ? ' selected="selected"':''}}>{{ $equipo->nombre }}</option>
                @endforeach
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