import { Component, OnInit } from '@angular/core';
import {ArticulosService} from "../Servicios/articulos.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  constructor(private _articulos:ArticulosService, private router:Router) { }

  imagen;
  titulo;
  ngOnInit() {
    this.cargarDetalles()
  }

  cargarDetalles(){
    this._articulos.cargarUnArticuloEspecifico(this._articulos.idArticulo).subscribe(value => {
      this.imagen=value.picture;
      this.titulo=value.name

    })
  }

  comprar(){

    this.router.navigate(['lista-compras'])
  }
}
