import {PaginaPrincipalComponent} from "./pagina-principal/pagina-principal.component";
import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {CardArticuloComponent} from "./card-articulo/card-articulo.component";

export const RUTAS_APP: Routes = [

  {
    path: '**',
    component: CardArticuloComponent
  }
];
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(RUTAS_APP);
