import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ROUTING} from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CardArticuloComponent } from './card-articulo/card-articulo.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ArticulosService} from "./Servicios/articulos.service";
import {HttpClientModule} from "@angular/common/http";
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CardArticuloComponent,
    PaginaPrincipalComponent,
    DetalleProductoComponent,
    ListaProductosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ROUTING
  ],
  providers: [ArticulosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
