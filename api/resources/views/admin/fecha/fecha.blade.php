@extends('layouts.admin')

@section('header')
@if ( session('error') )
  <div class="alert alert-danger">{{ session('error') }}</div>
@endif
@if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif
  <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            @section('titulo')
                <h1>Fechas</h1>
            @show
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#">Home</a></li>
              <li class="breadcrumb-item active"> listado  </li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>  
@endsection
