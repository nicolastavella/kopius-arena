@extends('admin.partido.partido')

@section('content')
<div class="modal fade" id="modal-delete">
  <form id="delete-form" action="" method="POST" enctype="multipart/form-data">
    @method('DELETE')
    @csrf
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Eliminar partido</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p  style="color:red">ATENCION!!!</p>
          <p>Se intenta a eliminar el partido <b><span id="descripcion"></span></b></p>
        </div>
        <div class="modal-footer justify-content-between">
          <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
          <button type="submit" class="btn btn-primary">Eliminar</button>
        </div>
      </div>
    </div>
  </form>
</div>

<div class="row">
  <div class="col-12">
    <div class="card">
      <div class="card-header">
        <h2 class="card-title"> Listado de Partidos </h2> 
        <div style="float: right">
          <a id="nuevo" href="{{ url('/admin/partido/create') }}" class="btn btn-block btn-primary btn-sm"> Nuevo Partido </a>
        </div>
      </div>
      <div class="card-body">
        <table id="tabla" class="table table-bordered table-hover">
          <thead>
            <tr>
              <th  class="d-none">ID</th>
              <th>Fecha</th>
              <th>Equipo 1</th>
              <th>Equipo 2</th>
              <th>Ganador</th>
              <th>Operaciones</th>
            </tr>
          </thead>
          <tbody>
          @foreach ($partido as $item)
            <tr>
              <td  class="d-none">{{ $item->id }}</td>
              <td>{{ $item->fecha->nombre }}</td>
              <td>{{ $item->equipo_1->nombre }}</td>
              <td>{{ $item->equipo_2->nombre }}</td>
              <td>{{ $item->ganador===null ?  ''  : ($item->ganador === 0 ? 'Empate' : $item->equipo->nombre)}}</td>
              
              <td class="text-right">
                <a href="{{ URL::action('PartidoController@edit', $item->id) }}">
                  <button type="button" class="btn.btn.app btn-primary btn-sm"><i class="fas fa-edit"></i> Editar </button>
                </a>
                <a href="" data-target="#modal-delete" data-toggle="modal">
                  <button type="button" class="btn.btn.app btn-danger btn-sm eliminar" data-id="{{ $item->id }}" data-desc="{{ $item->equipo_1->nombre }} vs. {{ $item->equipo_2->nombre }}" ><i class="fas fa-trash"></i> Borrar </button>
                </a>
              </td>              
            </tr>
          @endforeach
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
@endsection

@section('css')
    <!-- DataTables -->
    <link rel="stylesheet" href="{{ asset('plugins/datatables-bs4/css/dataTables.bootstrap4.css') }}">
@endsection


@section('script')
<script>
  $(function () {
    
    $('#tabla').DataTable({
        "paging": true,
        "lengthChange": false,
        "searching": false,
        "ordering": true,
        "info": true,
        "autoWidth": false,
        "order": [[1, 'desc']],
    });    
    
//modal eliminar
    $('.eliminar').click(function(){      
      url = '{{  url('/admin/partido/delete') }}/' + $( this ).data('id');
      $('#delete-form').prop('action', url);
      $('#descripcion').html($( this ).data('desc'));
      console.log(url);
    });
  });
</script>
@endsection
