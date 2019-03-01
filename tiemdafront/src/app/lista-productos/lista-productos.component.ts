import { Component, OnInit } from '@angular/core';
import {ArticulosService} from "../Servicios/articulos.service";

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  constructor(private _articulosService:ArticulosService) { }
  articulos:any[]=[];
  ngOnInit() {
    this.cargarArticulos();
    console.log(this.articulos)
  }

  cargarArticulos(){
    this._articulosService.obtenerProductosAudioVideo().subscribe(value =>
      {
          this.articulos.push(value.picture);
          this.articulos.push(value.name);
          for(var i=0; i< value.children_categories.length; i++){
            this.articulos.push(value.children_categories[i])

        }

      }
    )
  }
}
