import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmacionComponent } from '../components/utils/modal-confirmacion/modal-confirmacion.component';
import { RutasConstantes } from '../libs/rutas-constantes';
import {ModalVerPuntosComponent} from "./modal-ver-puntos/modal-ver-puntos.component";

@Component({
  selector: 'app-menu-mas',
  templateUrl: './menu-mas.component.html',
  styleUrls: ['./menu-mas.component.css']
})
export class MenuMasComponent implements OnInit {

  constructor(private modalService: NgbModal, private router: Router) { }

  ngOnInit(): void {
  }

  public cerrarSesion() {
    const modal = this.modalService.open(ModalConfirmacionComponent, {
      backdrop: "static",
      keyboard: false,
      size: 'lg',
      centered: true
    });
    modal.componentInstance.respuesta.subscribe(
      (result: any) => {
        console.log(result);
        if (result === true)
          this.router.navigate([RutasConstantes.INICIO_SISTEMA]);
      }
    );
  }

  public verPuntos() {
    const modal = this.modalService.open(ModalVerPuntosComponent, {
      backdrop: "static",
        keyboard: false,
        size: 'lg',
        fullscreen: true
    });
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
