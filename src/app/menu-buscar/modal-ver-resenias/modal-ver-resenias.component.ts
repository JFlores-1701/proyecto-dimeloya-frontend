import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalRegistrarReseniaComponent} from '../modal-registrar-resenia/modal-registrar-resenia.component';
import {OpinionService} from "../../services/opinion.service";
import {Opinion} from "../../models/opinion.interface";
import {Observable} from "rxjs";
import {RutasConstantes} from "../../libs/rutas-constantes";

@Component({
  selector: 'app-modal-ver-resenias',
  templateUrl: './modal-ver-resenias.component.html',
  styleUrls: ['./modal-ver-resenias.component.css']
})
export class ModalVerReseniasComponent implements OnInit {

  @Input() codResta!: number;
  public lstOPiniones: Opinion [] = [];

  starCount = 5;
  ratingArr: boolean[] = [];

  constructor(private activeModal: NgbActiveModal, private modalService: NgbModal, private service: OpinionService) {
    this.ratingArr = Array(this.starCount).fill(false);
  }

  ngOnInit(): void {
    this.service.listarOpiniones(this.codResta).subscribe(data => {
      this.lstOPiniones = data;
    });
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
    modal.componentInstance.codResta = this.codResta;
    modal.componentInstance.respuesta.subscribe(
      (result: any) => {
        console.log(result);
        if (result === true)
          this.service.listarOpiniones(this.codResta).subscribe(data => {
            this.lstOPiniones = data;
          });
      }
    );
  }

  returnStar(i: number, estrellas: number) {
    if (estrellas >= i + 1) {
      return 'star';
    } else {
      return 'star_border'
    }
  }
}
