import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Restaurante } from '../models/restaurante.interface';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  private apiBase: string = environment.urlBase;

  constructor(private http: HttpClient) { }

  listarRestaurantes() {
    return this.http.get<Restaurante[]>(this.apiBase + "restaurante/listar");
  }

  listarPorNombre(params: HttpParams) {
    return this.http.get<Restaurante[]>(this.apiBase + "restaurante/listarPorNombre", {params});
  }
}
