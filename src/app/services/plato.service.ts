import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Restaurante} from "../models/restaurante.interface";
import {Plato} from "../models/plato.interface";

@Injectable({
  providedIn: 'root'
})
export class PlatoService {

  constructor(private http: HttpClient) { }

  // SOLO NOMBRE
  listarPorNombre(nomRes: string) {
    let params = new HttpParams().set('nomRes', nomRes);
    return this.http.get<Plato[]>("https://dimeloya.herokuapp.com/api/v1/plato/listarPorRestaurante", {params});
  }
}
