import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalVerPlatosComponent } from '../modal-ver-platos/modal-ver-platos.component';
import { ModalVerReseniasComponent } from '../modal-ver-resenias/modal-ver-resenias.component';
import {RestauranteService} from "../../services/restaurante.service";
import {Restaurante} from "../../models/restaurante.interface";
import {Plato} from "../../models/plato.interface";
import {PlatoService} from "../../services/plato.service";

@Component({
  selector: 'app-modal-restaurante-seleccionado',
  templateUrl: './modal-restaurante-seleccionado.component.html',
  styleUrls: ['./modal-restaurante-seleccionado.component.css']
})
export class ModalRestauranteSeleccionadoComponent implements OnInit {

  // rating: number = 2; // ESTO SE PUEDE CAMBIAR POR EL PUNTAJE DEL RESTAURANTE
  starCount = 5;
  ratingArr: boolean[] = [];

  @Input() codigo!: number;
  @Input() nombre: string | undefined;
  @Input() puntaje!: number;
  @Input() direccion: string | undefined;
  @Input() mapa: string | any;
  @Input() fono: string | undefined;
  @Input() facebook: string | undefined;
  @Input() instagram: string | undefined;
  @Input() imgPrincipal: string | undefined;
  @Input() imgSecundaria: string | undefined;

  @Input() codSuscri: string | undefined;

  // PARA EL MAPA
  lstRestaurantes : Restaurante [] = [];
  mapaSanitizado: any;

  lstPlatos: Plato[] = [];

  constructor(private activeModal: NgbActiveModal, private modalService: NgbModal, private sanitizer: DomSanitizer, private service: RestauranteService, private servicePlato: PlatoService) {
    this.ratingArr = Array(this.starCount).fill(false);
  }

  ngOnInit(): void {
    console.log(this.codigo);
    this.mapaSanitizado = this.sanitizer.bypassSecurityTrustResourceUrl(this.mapa);
  }

  public goToInsta() {
    window.open(this.instagram, "_blank");
  }

  public goToFace(){
    window.open(this.facebook, "_blank");
  }

  public cerrar() {
    this.activeModal.close();
  }

  public verOpinionoes() {
    const modal = this.modalService.open(ModalVerReseniasComponent, {
      backdrop: "static",
      keyboard: false,
      size: 'lg',
      scrollable: true
    });
    modal.componentInstance.codResta = this.codigo;
  }

  public verPlatos() {
    this.listar();
    const modal = this.modalService.open(ModalVerPlatosComponent, {
      backdrop: "static",
      keyboard: false,
      size: 'lg'
    });
    modal.componentInstance.nombre = this.nombre;
    modal.componentInstance.lstPlatos = this.lstPlatos;
  }

  public listar(){
    if (this.nombre != null) {
      this.servicePlato.listarPorNombre(this.nombre).subscribe(data => {
        this.lstPlatos = data;
      })
    }
    console.log(this.lstPlatos);
  }

  returnStar(i: number) {
    if (this.puntaje >= i + 1) {
      return 'star';
    } else {
      return 'star_border'
    }
  }
}
