import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal-canjear-puntos',
  templateUrl: './modal-canjear-puntos.component.html',
  styleUrls: ['./modal-canjear-puntos.component.css']
})
export class ModalCanjearPuntosComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  public cerrar() {
    this.activeModal.close();
  }
}
