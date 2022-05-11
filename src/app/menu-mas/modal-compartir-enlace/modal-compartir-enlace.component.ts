import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal-compartir-enlace',
  templateUrl: './modal-compartir-enlace.component.html',
  styleUrls: ['./modal-compartir-enlace.component.css']
})
export class ModalCompartirEnlaceComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  public cerrar() {
    this.activeModal.close();
  }
}
