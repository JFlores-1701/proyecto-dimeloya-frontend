import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Cliente, ClienteResponse, LoginCliente} from '../models/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  ingresarAlSistema(loginCliente: LoginCliente) {
    return this.http.post<ClienteResponse>("https://dimeloya.herokuapp.com/api/v1/usuario/login", loginCliente);
  }

  registrarUsuario(usuario: Cliente) {
    return this.http.post<ClienteResponse>("https://dimeloya.herokuapp.com/api/v1/usuario/registrar", usuario);
  }
}
