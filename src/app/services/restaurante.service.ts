import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {Restaurante} from '../models/restaurante.interface';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  private apiBase: string = environment.urlBase;

  constructor(private http: HttpClient) {
  }

  listarRestaurantes() {
    return this.http.get<Restaurante[]>(this.apiBase + "restaurante/listar");
  }

  // SOLO NOMBRE
  listarPorNombre(nom: string) {
    let params = new HttpParams().set('nombreRes', nom);
    return this.http.get<Restaurante[]>(this.apiBase + "restaurante/listarPorNombre", {params});
  }

  // SOLO DIRECCION
  listarDireccion(direc: string) {
    let params = new HttpParams().set('dirResta', direc);
    return this.http.get<Restaurante[]>(this.apiBase + "restaurante/listarDirec", {params});
  }

  // SOLO CATEGORIA
  listarCategoria(cate: string) {
    let params = new HttpParams().set('cateResta', cate);
    return this.http.get<Restaurante[]>(this.apiBase + "restaurante/listarCate", {params});
  }

  // DOS -> NOMBRE Y DISTRITO
  listarNombreDireccion(nom: string, direc: string) {
    let params = new HttpParams()
      .set('nombreRes', nom)
      .set('dirResta', direc);
    return this.http.get<Restaurante[]>(this.apiBase + "restaurante/listarNomDirec", {params});
  }

  // DOS -> CATEGORIA Y DISTRITO
  listarCategoriaDireccion(cate: string, direc: string) {
    let params = new HttpParams()
      .set('cateResta', cate)
      .set('dirResta', direc);
    return this.http.get<Restaurante[]>(this.apiBase + "restaurante/listarCateDirec", {params});
  }

  // DOS -> NOMBRE Y CATEGORIA
  listarNombreCategoria(nom: string, cate: string) {
    let params = new HttpParams()
      .set('nombreRes', nom)
      .set('cateResta', cate);
    return this.http.get<Restaurante[]>(this.apiBase + "restaurante/listarNomCate", {params});
  }

  // TRES -> NOMBRE, CATEGORIA Y DIRECCION
  listarNombreCategoriaDireccion(nom: string, cate: string, direc: string) {
    let params = new HttpParams()
      .set('nombreRes', nom)
      .set('cateResta', cate)
      .set('dirResta', direc);
    return this.http.get<Restaurante[]>(this.apiBase + "restaurante/listarNomCateDirec", {params});
  }
}
