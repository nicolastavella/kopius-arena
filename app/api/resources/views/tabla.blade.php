@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Resultados</div>
                <div class="card-body">
                    <table id="tabla" class="table table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>Jugador</th>
                          <th>Puntos</th>
                        </tr>
                      </thead>
                      <tbody>
                      @foreach ($resultados as $item)
                        <tr>
                          <td>{{ $item->name }} </td>
                          <td>{{ $item->puntos }} </td>
                        </tr>
                      @endforeach
                      </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
