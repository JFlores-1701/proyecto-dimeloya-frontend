import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-resenia-registrada',
  templateUrl: './modal-resenia-registrada.component.html',
  styleUrls: ['./modal-resenia-registrada.component.css']
})
export class ModalReseniaRegistradaComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  public cerrar() {
    this.activeModal.close();
  }

  public aceptar() {
    this.cerrar();
  }
}
