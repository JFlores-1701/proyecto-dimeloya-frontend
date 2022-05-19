import { Component, OnInit } from '@angular/core';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalPagoPuntosComponent} from "../modal-pago-puntos/modal-pago-puntos.component";

@Component({
  selector: 'app-modal-agregar-puntos',
  templateUrl: './modal-agregar-puntos.component.html',
  styleUrls: ['./modal-agregar-puntos.component.css']
})
export class ModalAgregarPuntosComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  cerrar() {
    this.activeModal.close();
  }

  continuar() {
    const modal = this.modalService.open(ModalPagoPuntosComponent, {
      backdrop: "static",
      keyboard: false,
      scrollable: true,
      centered: true
    });
    modal.componentInstance.respuesta.subscribe(
      (result: any) => {
        if (result === true) {
          this.cerrar();
        }
      }
    );
  }
}
