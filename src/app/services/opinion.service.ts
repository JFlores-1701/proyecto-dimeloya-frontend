import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Restaurante} from "../models/restaurante.interface";
import {Opinion, OpinionRequest} from "../models/opinion.interface";

@Injectable({
  providedIn: 'root'
})
export class OpinionService {

  private apiBase: string = environment.urlBase;

  constructor(private http: HttpClient) { }

  listarOpiniones(codResta: number) {
    let params = new HttpParams().set('codResta', codResta);
    return this.http.get<Opinion[]>(this.apiBase + "opinion/listarPorRestaurante", {params});
  }

  registrarOpinion(opinion: OpinionRequest) {
    return this.http.post(this.apiBase + 'opinion/registrar', opinion);
  }
}
