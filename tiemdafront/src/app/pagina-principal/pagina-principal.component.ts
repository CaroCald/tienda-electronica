import { Component, OnInit } from '@angular/core';
import {ArticulosService} from "../Servicios/articulos.service";

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  constructor(private _articulosService:ArticulosService){

  }


  ngOnInit() {

  }


}
