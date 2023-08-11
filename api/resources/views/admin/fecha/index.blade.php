@extends('admin.fecha.fecha')

@section('content')
<div class="modal fade" id="modal-delete">
  <form id="delete-form" action="" method="POST" enctype="multipart/form-data">
    @method('DELETE')
    @csrf
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Eliminar fecha</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p  style="color:red">ATENCION!!!</p>
          <p>Se intenta a eliminar el fecha <b><span id="descripcion"></span></b></p>
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
        <h2 class="card-title"> Listado de Fechas </h2> 
        <div style="float: right">
          <a id="nuevo" href="{{ url('/admin/fecha/create') }}" class="btn btn-block btn-primary btn-sm"> Nueva Fecha </a>
        </div>
      </div>
      <div class="card-body">
        <table id="tabla" class="table table-bordered table-hover">
          <thead>
            <tr>
              <th  class="d-none">ID</th>
              <th>Nombre</th>
              <th>Puntos</th>
              <th>Estado</th>
              <th>Operaciones</th>
            </tr>
          </thead>
          <tbody>
          <?php $estados = App\Fecha::getEstados(); ?>              
          @foreach ($fecha as $item)
            <tr>
              <td  class="d-none">{{ $item->id }}</td>
              <td>{{ $item->nombre }}</td>
              <td>{{ $item->puntos }}</td>
              <td>{{ $estados[$item->estado] }}</td>
              
              <td class="text-right">
                <a href="{{ URL::action('FechaController@edit', $item->id) }}">
                  <button type="button" class="btn.btn.app btn-primary btn-sm"><i class="fas fa-edit"></i> Editar </button>
                </a>
                <a href="" data-target="#modal-delete" data-toggle="modal">
                  <button type="button" class="btn.btn.app btn-danger btn-sm eliminar" data-id="{{ $item->id }}" data-desc="{{ $item->nombre }}" ><i class="fas fa-trash"></i> Borrar </button>
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
    });    
    
//modal eliminar
    $('.eliminar').click(function(){      
      url = '{{  url('/admin/fecha/delete') }}/' + $( this ).data('id');
      $('#delete-form').prop('action', url);
      $('#descripcion').html($( this ).data('desc'));
      console.log(url);
    });
  });
</script>
@endsection
