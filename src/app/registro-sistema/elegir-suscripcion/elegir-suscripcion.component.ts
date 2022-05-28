import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ModalMensajeComponent} from "../../components/utils/modal-mensaje/modal-mensaje.component";
import {Router} from "@angular/router";
import {RutasConstantes} from "../../libs/rutas-constantes";
import {ModalPagoPuntosComponent} from "../../menu-mas/modal-pago-puntos/modal-pago-puntos.component";

@Component({
  selector: 'app-elegir-suscripcion',
  templateUrl: './elegir-suscripcion.component.html',
  styleUrls: ['./elegir-suscripcion.component.css']
})
export class ElegirSuscripcionComponent implements OnInit {

  public formSuscripcion: FormGroup;
  @Output() respuesta = new EventEmitter<string>();

  constructor(private router: Router, private activeModal: NgbActiveModal, private fb: FormBuilder, private modalService: NgbModal) {
    this.formSuscripcion = this.createForm();
  }

  ngOnInit(): void {
  }

  private createForm() {
    return this.formSuscripcion = this.fb.group({
      gratis: [false],
      unmes: [false],
      tresmeses: [false]
    });
  }

  public get getForm() {
    return this.formSuscripcion;
  }

  public get fieldGratis() {
    return this.getForm.get('gratis');
  }

  public get fieldUnMes() {
    return this.getForm.get('unmes');
  }

  public get fieldTresMeses() {
    return this.getForm.get('tresmeses');
  }

  public continuar() {
    if (this.fieldGratis?.value === true) {
      this.respuesta.emit('1');
      this.cerrar();
    }

    if (this.fieldUnMes?.value === true) {
      const modal = this.modalService.open(ModalPagoPuntosComponent, {
        backdrop: "static",
        keyboard: false,
        size: 'sm',
        centered: true
      });
      modal.componentInstance.importe = '9.90';
      modal.componentInstance.respuesta.subscribe(
        (result: any) => {
          if (result === true) {
            this.respuesta.emit('2');
            this.cerrar();
          }
        }
      );
    }

    if (this.fieldTresMeses?.value === true) {
      const modal = this.modalService.open(ModalPagoPuntosComponent, {
        backdrop: "static",
        keyboard: false,
        size: 'sm',
        centered: true
      });
      modal.componentInstance.importe = '28.90';
      modal.componentInstance.respuesta.subscribe(
        (result: any) => {
          if (result === true) {
            this.respuesta.emit('3');
            this.cerrar();
          }
        }
      );
    }
  }

  public validarSeleccion(){
    if (this.fieldGratis?.value === true) {
      this.formSuscripcion.patchValue({
        unmes: false,
        tresmeses: false
      });
    }
    if (this.fieldUnMes?.value === true) {
      this.formSuscripcion.patchValue({
        gratis: false,
        tresmeses: false
      });
    }
    if (this.fieldTresMeses?.value === true) {
      this.formSuscripcion.patchValue({
        gratis: false,
        unmes: false
      });
    }
  }

  public cerrar() {
    this.activeModal.close();
  }
}
