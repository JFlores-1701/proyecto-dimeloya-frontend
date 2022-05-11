import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal-videos-disponibles',
  templateUrl: './modal-videos-disponibles.component.html',
  styleUrls: ['./modal-videos-disponibles.component.css']
})
export class ModalVideosDisponiblesComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  public cerrar() {
    this.activeModal.close();
  }
}
