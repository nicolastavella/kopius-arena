@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
            <div class="card-header">Prode {{$fecha->nombre ?? ''}}</div>
            @if($fecha)
                @if($partidosfecha->count())
                <form method="POST" enctype="multipart/form-data">
                @csrf
                <div class="card-body">
                    <table id="tabla" class="table table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>Partido</th>
                          <th>Ganador</th>
                        </tr>
                      </thead>
                      <tbody>
                      <input type="hidden" name="fecha_id" value="{{$fecha->id}}">
                      @foreach ($partidosfecha as $item)
                        <input type="hidden" name="prode[{{ $item->id }}][partido_id]" value="{{ $item->id }}">
                        <tr>
                          <td>{{ $item->equipo_1->nombre }} vs {{ $item->equipo_2->nombre }}</td>
                          <td>
                            <select name="prode[{{ $item->id }}][ganador]" class="form-control"> 
                              <option value="0"{{$item->ganador == 0 ? 'selected="selected"' : ''}}>Empate</option>
                              <option value="{{ $item->equipo1 }}" {{$item->ganador == $item->equipo1 ? 'selected="selected"' : ''}} >{{ $item->equipo_1->nombre }}</option>
                              <option value="{{ $item->equipo2 }}" {{$item->ganador == $item->equipo2 ? 'selected="selected"' : ''}}>{{ $item->equipo_2->nombre }}</option>
                            </select>
                        </tr>
                      @endforeach
                      </tbody>
                    </table>
                    
                </div>
                <div class="card-footer">
                  <button type="submit" class="btn btn-warning float-right">Guardar</button>
                </div>
              </form>
                @else
                <div class="card-body">No hay partidos para {{$fecha->nombre}}</div>
                @endif
            @else
                <div class="card-body">No hay fechas activas</div>
            @endif                
            </div>

        </div>
    </div>
</div>
@endsection
