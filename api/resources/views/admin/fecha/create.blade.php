@extends('admin.fecha.fecha')

@section('content')
<div class="row">
  <div class="col-md-12">
    <div class="card">
      <div class="card-header cool">
        <h2 class="card-title">Nuevo Fecha</h2>
      </div>
      <form method="POST" enctype="multipart/form-data" class="form-horizontal">
        <div class="card-body">
          @csrf
          
          <div class="form-group row">
            <label for="nombre" class="col-sm-2 col-form-label">Nombre</label>
            <div class="col-sm-10">
                <input type="text" name="nombre" class="form-control" placeholder="Nombre" required>
            </div>
          </div>
          <div class="form-group row">
            <label for="puntos" class="col-sm-2 col-form-label">Puntos</label>
            <div class="col-sm-10">
                <input type="text" name="puntos" class="form-control" placeholder="Puntos" required>
            </div>
          </div>
          <div class="form-group row">
            <label for="estado" class="col-sm-2 col-form-label">Estado</label>
            <div class="col-sm-10">
              <select name="estado" class="form-control">
                <?php $estados = App\Fecha::getEstados(); ?>
                @foreach($estados as $estado=>$descripcion)
                <option value="{{ $estado }}"{{old('estado') == $estado ? ' selected="selected"':''}}>{{ $descripcion }}</option>
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