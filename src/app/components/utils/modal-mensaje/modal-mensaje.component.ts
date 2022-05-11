import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-mensaje',
  templateUrl: './modal-mensaje.component.html',
  styleUrls: ['./modal-mensaje.component.css']
})
export class ModalMensajeComponent implements OnInit {

  @Input() msg!: string;
  @Output() respuesta = new EventEmitter<boolean>();

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {

  }

  public cerrar() {
    this.respuesta.emit(true);
    this.activeModal.close();
  }
}
