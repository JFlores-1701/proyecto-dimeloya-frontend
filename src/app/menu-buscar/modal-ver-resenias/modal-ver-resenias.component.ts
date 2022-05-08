import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalRegistrarReseniaComponent } from '../modal-registrar-resenia/modal-registrar-resenia.component';

@Component({
  selector: 'app-modal-ver-resenias',
  templateUrl: './modal-ver-resenias.component.html',
  styleUrls: ['./modal-ver-resenias.component.css']
})
export class ModalVerReseniasComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  public cerrar() {
    this.activeModal.close();
  }

  public abrirRegOpinion() {
    const modal = this.modalService.open(ModalRegistrarReseniaComponent, {
      backdrop: "static",
      keyboard: false,
      size: 'lg',
      centered: true
    });
  }
}
