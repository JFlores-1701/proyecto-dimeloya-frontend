import {Component, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {
  ModalRestauranteSeleccionadoComponent
} from "../../menu-buscar/modal-restaurante-seleccionado/modal-restaurante-seleccionado.component";
import {ModalVideosDisponiblesComponent} from "../modal-videos-disponibles/modal-videos-disponibles.component";
import {ModalCompartirEnlaceComponent} from "../modal-compartir-enlace/modal-compartir-enlace.component";
import {ModalCanjearPuntosComponent} from "../modal-canjear-puntos/modal-canjear-puntos.component";

@Component({
  selector: 'app-modal-ver-puntos',
  templateUrl: './modal-ver-puntos.component.html',
  styleUrls: ['./modal-ver-puntos.component.css']
})
export class ModalVerPuntosComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal, private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  public cerrar() {
    this.activeModal.close();
  }

  public videosDisponibles() {
    const modal = this.modalService.open(ModalVideosDisponiblesComponent, {
      backdrop: "static",
      keyboard: false,
      fullscreen: true,
      scrollable: true
    });
  }

  public compartirEnlace() {
    const modal = this.modalService.open(ModalCompartirEnlaceComponent, {
      backdrop: "static",
      keyboard: false,
      fullscreen: true,
      scrollable: true
    });
  }

  public canjearPuntos() {
    const modal = this.modalService.open(ModalCanjearPuntosComponent, {
      backdrop: "static",
      keyboard: false,
      fullscreen: true,
      scrollable: true
    });
  }
}
