import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class ArticulosService {

  idArticulo;
  constructor(private http:HttpClient){

  }

  obtenerProductosAudioVideo(): Observable<AudioVideo> {
  return this.http.get<AudioVideo>("https://api.mercadolibre.com/categories/MLA1000");
  }
  colocarId(id){
    this.idArticulo=id;
  }



}


export interface AudioVideo {

  picture;
  name;
  children_categories: children_categories[]

}

export interface children_categories {

  id,
  name,
  total_items_in_this_category,
}
