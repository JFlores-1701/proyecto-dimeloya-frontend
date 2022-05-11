import { ThisReceiver } from '@angular/compiler';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalReseniaRegistradaComponent } from '../modal-resenia-registrada/modal-resenia-registrada.component';
import {Opinion, OpinionRequest} from "../../models/opinion.interface";
import {OpinionService} from "../../services/opinion.service";

@Component({
  selector: 'app-modal-registrar-resenia',
  templateUrl: './modal-registrar-resenia.component.html',
  styleUrls: ['./modal-registrar-resenia.component.css']
})
export class ModalRegistrarReseniaComponent implements OnInit {

  @Input() codResta!: number;
  @Output() respuesta = new EventEmitter<boolean>();

  public formResenia: FormGroup;
  public cantChars: number = 0;
  public msg = "Dato obligatorio";

  rating: number = 0;
  starCount = 5;
  ratingArr: boolean[] = [];

  constructor(private activeModal: NgbActiveModal, private modalService: NgbModal, private fb: FormBuilder, private service: OpinionService) {
    this.formResenia = this.createForm();
    this.ratingArr = Array(this.starCount).fill(false);
  }

  ngOnInit(): void {
    console.log(this.codResta);
  }

  private createForm() {
    return this.formResenia = this.fb.group({
      comentarios: [null, [Validators.required]],
    });
  }

  public get getForm() {
    return this.formResenia;
  }

  public get fieldComentarios() {
    return this.getForm.get('comentarios');
  }

  public contarChars(event: Event) {
    const campo = event.target as HTMLTextAreaElement;
    this.cantChars = campo.value.length;
  }

  public cerrar() {
    this.activeModal.close();
  }

  public registrarOpinion() {

    this.getForm.markAllAsTouched();
    if(this.getForm.invalid) return;

    console.log(this.fieldComentarios?.value);
    console.log(this.rating);

    const opinion: OpinionRequest = {
      desOpi: this.fieldComentarios?.value,
      puntOpi: this.rating,
      codRestaOpi: this.codResta,
      nomUsuarioOpi: 'Katherine Pimentel'
    }

    this.service.registrarOpinion(opinion).subscribe(data => {
      this.respuesta.emit(true);
      this.cerrar();
    });

    // SI REGISTRO OK -> MUESTRO MODAL CONFIRMACION
    /*
    const modal = this.modalService.open(ModalReseniaRegistradaComponent, {
      backdrop: "static",
      keyboard: false,
      size: 'lg',
      centered: true
    });*/

    // SI REGISTRO NO OK -> MUETROS MODAL ERROR
  }

  // PARA LA PUNTUACION DE ESTRELLAS
  returnStar(i: number) {
    if (this.rating >= i + 1) {
      return 'star';
    } else {
      return 'star_border'
    }
  }

  onClick(i: number) {
    this.rating = i + 1;
  }
}
