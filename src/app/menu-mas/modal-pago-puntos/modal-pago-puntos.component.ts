import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalPagoExitosoComponent} from "../modal-pago-exitoso/modal-pago-exitoso.component";
import {RutasConstantes} from "../../libs/rutas-constantes";

@Component({
  selector: 'app-modal-pago-puntos',
  templateUrl: './modal-pago-puntos.component.html',
  styleUrls: ['./modal-pago-puntos.component.css']
})
export class ModalPagoPuntosComponent implements OnInit {

  @Input() importe: string = '';
  @Output() respuesta = new EventEmitter<boolean>();

  constructor(private activeModal: NgbActiveModal, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  public cerrar() {
    this.activeModal.close();
  }

  public pagar() {
    const modal = this.modalService.open(ModalPagoExitosoComponent, {
      backdrop: "static",
      keyboard: false,
      scrollable: true,
      centered: true
    });
    modal.componentInstance.respuesta.subscribe(
      (result: any) => {
        if (result === true) {
          this.respuesta.emit(true);
          this.cerrar();
        }
      }
    );
  }
}
