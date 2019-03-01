import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {DetalleProductoComponent} from "./detalle-producto/detalle-producto.component";
import {ListaProductosComponent} from "./lista-productos/lista-productos.component";
import {ListaComprasComponent} from "./lista-compras/lista-compras.component";

export const RUTAS_APP: Routes = [

  {
    path: 'lista',
    component: ListaProductosComponent
  },
  {
    path: 'detalle',
    component: DetalleProductoComponent
  },
  {
    path: 'lista-compras',
    component: ListaComprasComponent
  },
  {
    path: '**',
    component: ListaProductosComponent
  }

];
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(RUTAS_APP);
