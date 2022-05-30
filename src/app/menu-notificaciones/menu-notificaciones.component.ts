import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RutasConstantes } from '../libs/rutas-constantes';

@Component({
  selector: 'app-menu-notificaciones',
  templateUrl: './menu-notificaciones.component.html',
  styleUrls: ['./menu-notificaciones.component.css']
})
export class MenuNotificacionesComponent implements OnInit {

  public json: any;
  public codSuscri: string | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // @ts-ignore
    this.json = JSON.parse(localStorage.getItem("usuario"));
    this.codSuscri = this.json.codSuscri;
    if (this.json.codUsuario == null) {
      this.router.navigate([RutasConstantes.INICIO_SISTEMA]);
    }
  }

  // BOTONES NAVEGACION
  public irHome() {
    this.router.navigate([RutasConstantes.MENU_INICIO]);
  }

  public irNotificaciones() {
    this.router.navigate([RutasConstantes.MENU_NOTIFICACIONES]);
  }

  public irBuscar() {
    this.router.navigate([RutasConstantes.MENU_BUSCAR]);
  }

  public irFavoritos() {
    this.router.navigate([RutasConstantes.MENU_FAVORITOS]);
  }

  public irMas() {
    this.router.navigate([RutasConstantes.MENU_MAS]);
  }
}
