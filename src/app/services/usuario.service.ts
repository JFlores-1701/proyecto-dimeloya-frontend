import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Cliente, ClienteResponse, LoginCliente} from '../models/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiBase: string = environment.urlBase;

  constructor(private http: HttpClient) { }

  ingresarAlSistema(loginCliente: LoginCliente) {
    return this.http.post<ClienteResponse>(this.apiBase + "usuario/login", loginCliente);
  }

  registrarUsuario(usuario: Cliente) {
    return this.http.post<ClienteResponse>(this.apiBase + "usuario/registrar", usuario);
  }
}
