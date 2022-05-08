import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RutasConstantes } from '../libs/rutas-constantes';
import { Restaurante } from '../models/restaurante.interface';
import { RestauranteService } from '../services/restaurante.service';
import { ModalRestauranteSeleccionadoComponent } from './modal-restaurante-seleccionado/modal-restaurante-seleccionado.component';

@Component({
  selector: 'app-menu-buscar',
  templateUrl: './menu-buscar.component.html',
  styleUrls: ['./menu-buscar.component.css']
})
export class MenuBuscarComponent implements OnInit {

  public msg = "Dato obligatorio";

  public formBuscar: FormGroup;
  public textoBuscado: any;
  public existeBusqueda: any;
  public lstRestaurantes: Restaurante[] = [];

  constructor(private modalService: NgbModal, private router: Router, private fb: FormBuilder, private service: RestauranteService, private sanitizer: DomSanitizer) {
    this.formBuscar = this.createForm();
  }

  ngOnInit(): void {
  }

  public createForm() {
    return this.fb.group({
      buscar: [null, [Validators.required]]
    })
  }

  public get getForm() {
    return this.formBuscar;
  }

  public get fieldBuscar() {
    return this.getForm.get('buscar');
  }

   // BUSCAR
  public buscarPorNombre() {

    if(this.getForm.invalid) return;

    // FALTAN REALIZAR VALIDACIONES
    this.textoBuscado = this.fieldBuscar?.value;

    this.existeBusqueda = true;

    // LISTAR
    let params = new HttpParams().set('nombreRes', this.fieldBuscar?.value);

    this.service.listarPorNombre(params).subscribe(data => {
      this.lstRestaurantes = data;
    })

    console.log(this.lstRestaurantes);
  }

  public verRestaurante(item: Restaurante) {
    const modal = this.modalService.open(ModalRestauranteSeleccionadoComponent, {
      backdrop: "static",
      keyboard: false,
      fullscreen: true,
      scrollable: true
    });
    let mapaURL = 'https://www.google.com/maps/embed?' + item.mapaResta;
    console.log('Este es la ruta del: ' + mapaURL);

    modal.componentInstance.codigo = item.codResta;
    modal.componentInstance.mapa = mapaURL;
    modal.componentInstance.nombre = item.nomResta;
    modal.componentInstance.puntaje = item.puntosResta;
    modal.componentInstance.direccion = item.direcResta;
    modal.componentInstance.fono = item.fonoResta;
    modal.componentInstance.facebook = item.faceResta;
    modal.componentInstance.instagram = item.instaResta;
    modal.componentInstance.imgPrincipal = item.imgPrincResta;
    modal.componentInstance.imgSecundaria = item.imgSecondResta;
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

  // **********************************************************
  public buscar() {
    console.log(this.fieldBuscar?.value);

    // FALTAN REALIZAR VALIDACIONES
    this.textoBuscado = this.fieldBuscar?.value;
    this.existeBusqueda = true;
    console.log(this.existeBusqueda);

    // LISTAR
    this.service.listarRestaurantes().subscribe(data => {
      this.lstRestaurantes = data;
    })

    console.log(this.lstRestaurantes);
  }
}
