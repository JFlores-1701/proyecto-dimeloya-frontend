import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-ver-platos',
  templateUrl: './modal-ver-platos.component.html',
  styleUrls: ['./modal-ver-platos.component.css']
})
export class ModalVerPlatosComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  public cerrar() {
    this.activeModal.close();
  }

  public aceptar() {
    this.cerrar();
  }
}
