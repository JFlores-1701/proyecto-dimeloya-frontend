import {HttpParams} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RutasConstantes} from '../libs/rutas-constantes';
import {Restaurante} from '../models/restaurante.interface';
import {RestauranteService} from '../services/restaurante.service';
import {
  ModalRestauranteSeleccionadoComponent
} from './modal-restaurante-seleccionado/modal-restaurante-seleccionado.component';

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

  public categoriaItem?: String;
  public lstCategoria: String[] = ['Comida Criolla', 'Cevichería', 'Restobares'];
  public lstDistrito: String[] = ['ANCÓN',
    'ATE',
    'BARRANCO',
    'BREÑA',
    'CARABAYLLO',
    'CERCADO DE LIMA',
    'CHACLACAYO',
    'CHORRILLOS',
    'CIENEGUILLA',
    'COMAS',
    'EL AGUSTINO',
    'INDEPENDENCIA',
    'JESÚS MARÍA',
    'LA MOLINA',
    'LA VICTORIA',
    'LIMA',
    'LINCE',
    'LOS OLIVOS',
    'LURIGANCHO-CHOSICA',
    'LURÍN',
    'MAGDALENA DEL MAR',
    'MIRAFLORES',
    'PACHACÁMAC',
    'PUCUSANA',
    'PUEBLO LIBRE',
    'PUENTE PIEDRA',
    'PUNTA HERMOSA',
    'PUNTA NEGRA',
    'RÍMAC',
    'SAN BARTOLO',
    'SAN BORJA',
    'SAN ISIDRO',
    'SAN JUAN DE LURIGANCHO',
    'SAN JUAN DE MIRAFLORES',
    'SAN LUIS',
    'SAN MARTIN DE PORRES',
    'SAN MIGUEL',
    'SANTA ANITA',
    'SANTA MARÍA DEL MAR',
    'SANTA ROSA',
    'SANTIAGO DE SURCO',
    'SURQUILLO',
    'VILLA EL SALVADOR',
    'VILLA MARIA DEL TRIUNFO'];

  constructor(private modalService: NgbModal, private router: Router, private fb: FormBuilder, private service: RestauranteService) {
    this.formBuscar = this.createForm();
  }

  ngOnInit(): void {
  }

  public createForm() {
    return this.fb.group({
      buscar: [null, [Validators.required]],
      categoria: [null, null],
      distrito: [null, null]
    })
  }

  public get getForm() {
    return this.formBuscar;
  }

  public get fieldBuscar() {
    return this.getForm.get('buscar');
  }

  public get fieldCategoria() {
    return this.getForm.get('categoria');
  }

  public get fieldDistrito() {
    return this.getForm.get('distrito');
  }

  // LIMPIAR
  public limpiar() {
    this.lstRestaurantes = [];
    this.existeBusqueda = false;
    this.formBuscar.reset();
  }

  // BUSCAR
  public buscarPorNombre() {
    // if (this.getForm.invalid) return;

    console.log(this.fieldCategoria?.value)
    console.log(this.fieldDistrito?.value)

    // FALTAN REALIZAR VALIDACIONES
    this.textoBuscado = this.fieldBuscar?.value;
    this.existeBusqueda = true;


    /* PARA LAS CONSULTAS */
    // SOLO NOMBRE
    if (this.fieldBuscar?.value != null && this.fieldCategoria?.value === null && this.fieldDistrito?.value === null) {
      this.service.listarPorNombre(this.fieldBuscar.value).subscribe(data => {
        this.lstRestaurantes = data;
      })
    }
    // SOLO CATEGORIA
    if (this.fieldBuscar?.value === null && this.fieldCategoria?.value != null && this.fieldDistrito?.value === null) {
      this.service.listarCategoria(this.fieldCategoria.value).subscribe(data => {
        this.lstRestaurantes = data;
      })
    }
    // SOLO DISTRITO
    if (this.fieldBuscar?.value === null && this.fieldCategoria?.value === null && this.fieldDistrito?.value != null) {
      this.service.listarDireccion(this.fieldDistrito.value).subscribe(data => {
        this.lstRestaurantes = data;
      })
    }
    // DOS -> NOMBRE Y DIRECCION
    if (this.fieldBuscar?.value != null && this.fieldCategoria?.value === null && this.fieldDistrito?.value != null) {
      this.service.listarNombreDireccion(this.fieldBuscar.value, this.fieldDistrito.value).subscribe(data => {
        this.lstRestaurantes = data;
      })
    }
    // DOS -> CATEGORIA Y DISTRITO
    if (this.fieldBuscar?.value === null && this.fieldCategoria?.value != null && this.fieldDistrito?.value != null) {
      this.service.listarCategoriaDireccion(this.fieldCategoria.value, this.fieldDistrito.value).subscribe(data => {
        this.lstRestaurantes = data;
      })
    }
    // DOS -> NOMBRE Y CATEGORIA
    if (this.fieldBuscar?.value != null && this.fieldCategoria?.value != null && this.fieldDistrito?.value === null) {
      this.service.listarNombreCategoria(this.fieldBuscar.value, this.fieldCategoria.value).subscribe(data => {
        this.lstRestaurantes = data;
      })
    }
    // TRES -> NOMBRE, CATEGORIA Y DIRECCION
    if (this.fieldBuscar?.value != null && this.fieldCategoria?.value != null && this.fieldDistrito?.value != null) {
      this.service.listarNombreCategoriaDireccion(this.fieldBuscar.value, this.fieldCategoria.value, this.fieldDistrito.value).subscribe(data => {
        this.lstRestaurantes = data;
      })
    }

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