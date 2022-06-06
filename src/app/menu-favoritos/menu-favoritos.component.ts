import { HttpClient } from '@angular/common/http';
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {RutasConstantes} from '../libs/rutas-constantes';
import {Favoritos} from "../models/favoritos.interface";
import { Restaurante } from '../models/restaurante.interface';
import { RestauranteService } from '../services/restaurante.service';

@Component({
  selector: 'app-menu-favoritos',
  templateUrl: './menu-favoritos.component.html',
  styleUrls: ['./menu-favoritos.component.css']
})
export class MenuFavoritosComponent implements OnInit {

  public lstFavoritos: String[] = ['Pardos Chicken', 'Rosa Naútica', 'Rodizzio', 'Kumar',
    'Naruto', 'La Bistecca', 'Astrid y Gastón', 'Astrid y Gastón', 'Astrid y Gastón', 'Astrid y Gastón'];

  public json: any;
  public codSuscri: string | undefined;

  constructor(private router: Router, private http: HttpClient) {
    this.arrayFav = [];
  }

  ngOnInit(): void {
    // @ts-ignore
    this.json = JSON.parse(localStorage.getItem("usuario"));
    this.codSuscri = this.json.codSuscri;
    if (this.json.codUsuario == null) {
      this.router.navigate([RutasConstantes.INICIO_SISTEMA]);
    } else {
      this.favoritos();
    }
  }

  Movie: Object = Object;
  arrayFav: string [];

  favoritos () {
    const promise = this.http.get('https://dimeloya.herokuapp.com/api/v1/restaurante/favoritos').toPromise();
    console.log(promise);
    promise.then((data)=>{
      this.Movie = JSON.stringify(data)
      this.Movie = this.Movie.toString().slice(2, -2);
      this.arrayFav = this.Movie.toString().split('","', 10);
      console.log(this.arrayFav);
    }).catch((error)=>{
      console.log("Promise rejected with " + JSON.stringify(error));
    });
  }

  public irRestaurante(nombre: String) {
    this.router.navigate([RutasConstantes.MENU_BUSCAR, nombre]);
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
