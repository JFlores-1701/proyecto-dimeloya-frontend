import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Restaurante} from '../models/restaurante.interface';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  apiBase: string = "https://dimeloya.herokuapp.com/api/v1/";
  results: Object[];
  loading : boolean;

  constructor(private http: HttpClient) {
    this.results = [];
    this.loading = false;
  }

  listarFavoritos() {
    return this.http.get<Restaurante[]>("https://dimeloya.herokuapp.com/api/v1/restaurante/obtenerFavoritos");
  }

  listarRestaurantes() {
    return this.http.get<Restaurante[]>("https://dimeloya.herokuapp.com/api/v1/restaurante/listar");
  }

  // SOLO NOMBRE
  listarPorNombre(nom: string) {
    let params = new HttpParams().set('nombreRes', nom);
    return this.http.get<Restaurante[]>("https://dimeloya.herokuapp.com/api/v1/restaurante/listarPorNombre", {params});
  }

  // SOLO DIRECCION
  listarDireccion(direc: string) {
    let params = new HttpParams().set('dirResta', direc);
    return this.http.get<Restaurante[]>("https://dimeloya.herokuapp.com/api/v1/restaurante/listarDirec", {params});
  }

  // SOLO CATEGORIA
  listarCategoria(cate: string) {
    let params = new HttpParams().set('cateResta', cate);
    return this.http.get<Restaurante[]>("https://dimeloya.herokuapp.com/api/v1/restaurante/listarCate", {params});
  }

  // DOS -> NOMBRE Y DISTRITO
  listarNombreDireccion(nom: string, direc: string) {
    let params = new HttpParams()
      .set('nombreRes', nom)
      .set('dirResta', direc);
    return this.http.get<Restaurante[]>("https://dimeloya.herokuapp.com/api/v1/restaurante/listarNomDirec", {params});
  }

  // DOS -> CATEGORIA Y DISTRITO
  listarCategoriaDireccion(cate: string, direc: string) {
    let params = new HttpParams()
      .set('cateResta', cate)
      .set('dirResta', direc);
    return this.http.get<Restaurante[]>("https://dimeloya.herokuapp.com/api/v1/restaurante/listarCateDirec", {params});
  }

  // DOS -> NOMBRE Y CATEGORIA
  listarNombreCategoria(nom: string, cate: string) {
    let params = new HttpParams()
      .set('nombreRes', nom)
      .set('cateResta', cate);
    return this.http.get<Restaurante[]>("https://dimeloya.herokuapp.com/api/v1/restaurante/listarNomCate", {params});
  }

  // TRES -> NOMBRE, CATEGORIA Y DIRECCION
  listarNombreCategoriaDireccion(nom: string, cate: string, direc: string) {
    let params = new HttpParams()
      .set('nombreRes', nom)
      .set('cateResta', cate)
      .set('dirResta', direc);
    return this.http.get<Restaurante[]>("https://dimeloya.herokuapp.com/api/v1/restaurante/listarNomCateDirec", {params});
  }
}
