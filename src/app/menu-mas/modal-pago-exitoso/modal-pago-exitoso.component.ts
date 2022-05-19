import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal-pago-exitoso',
  templateUrl: './modal-pago-exitoso.component.html',
  styleUrls: ['./modal-pago-exitoso.component.css']
})
export class ModalPagoExitosoComponent implements OnInit {

  @Output() respuesta = new EventEmitter<boolean>();

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  public cerrar() {
    this.respuesta.emit(true);
    this.activeModal.close();
  }
}
