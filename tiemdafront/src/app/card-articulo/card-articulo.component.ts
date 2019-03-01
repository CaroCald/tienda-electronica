import {Component, Input, NgZone, OnInit} from '@angular/core';
import {ArticulosService} from "../Servicios/articulos.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-articulo',
  templateUrl: './card-articulo.component.html',
  styleUrls: ['./card-articulo.component.css']
})
export class CardArticuloComponent implements OnInit {

  constructor(private _articulosService:ArticulosService,
              private router:Router,
              private _ngZone: NgZone) { }

  @Input() descripcion;
  @Input() imagen;
  @Input() titulo;
  @Input() cantidad;
  @Input()id;

  ngOnInit() {

  }

  colocarId(id){

    this._articulosService.colocarId(id);
    this._ngZone.run(() => {
      this.router.navigate(['detalle']);
    });
  }



}
