import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-confirmacion',
  templateUrl: './modal-confirmacion.component.html',
  styleUrls: ['./modal-confirmacion.component.css']
})
export class ModalConfirmacionComponent implements OnInit {

  @Output() respuesta = new EventEmitter<boolean>();

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  public cerrar() {
    this.activeModal.close();
  }

  public aceptar() {
    this.respuesta.emit(true);
    this.cerrar();
  }

  public cancelar() {
    this.cerrar();
  }
}
