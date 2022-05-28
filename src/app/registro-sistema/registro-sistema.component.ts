import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {RutasConstantes} from '../libs/rutas-constantes';
import {Cliente, ClienteResponse} from '../models/usuario.interface';
import {UsuarioService} from "../services/usuario.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalMensajeComponent} from "../components/utils/modal-mensaje/modal-mensaje.component";
import {ElegirSuscripcionComponent} from "./elegir-suscripcion/elegir-suscripcion.component";

@Component({
  selector: 'app-registro-sistema',
  templateUrl: './registro-sistema.component.html',
  styleUrls: ['./registro-sistema.component.css']
})
export class RegistroSistemaComponent implements OnInit {

  public formCliente: FormGroup;
  public msg = "Dato obligatorio";
  public response: ClienteResponse | undefined;

  constructor(private router: Router, private fb: FormBuilder, private service: UsuarioService, private modalService: NgbModal) {
    this.formCliente = this.createForm();
  }

  ngOnInit(): void {
  }

  private createForm() {
    return this.formCliente = this.fb.group({
      nomCliente: [null, [Validators.required]],
      apeCliente: [null, [Validators.required]],
      emailCliente: [null, [Validators.required]],
      passCliente: [null, [Validators.required]],
      repPassCliente: [null, [Validators.required]]
    });
  }

  public get getForm() {
    return this.formCliente;
  }

  public get fieldNombreCliente() {
    return this.getForm.get('nomCliente');
  }

  public get fieldApellidoCliente() {
    return this.getForm.get('apeCliente');
  }

  public get fieldCorreoElectronico() {
    return this.getForm.get('emailCliente');
  }

  public get fieldContrasena() {
    return this.getForm.get('passCliente');
  }

  public get fieldRepContrasena() {
    return this.getForm.get('repPassCliente');
  }

  // REGISTRO USUARIO
  public registrarUsuario() {

    this.getForm.markAllAsTouched();
    if (this.getForm.invalid) return;
    /*
    const cliente: Cliente = {
      nomUsuario: this.fieldNombreCliente?.value,
      apeUsuario: this.fieldApellidoCliente?.value,
      emailUsuario: this.fieldCorreoElectronico?.value,
      passUsuario: this.fieldContrasena?.value
    }
    console.log(cliente);
    */

    const modal = this.modalService.open(ElegirSuscripcionComponent, {
      backdrop: "static",
      keyboard: false,
      size: 'sm',
      centered: true
    });
    modal.componentInstance.respuesta.subscribe(
      (result: any) => {
        const cliente: Cliente = {
          nomUsuario: this.fieldNombreCliente?.value,
          apeUsuario: this.fieldApellidoCliente?.value,
          emailUsuario: this.fieldCorreoElectronico?.value,
          passUsuario: this.fieldContrasena?.value,
          codSuscri: result
        }
        console.log(cliente);
        this.service.registrarUsuario(cliente).subscribe(data => {
            this.response = data;
            if (this.response.codUsuario != null) {
              const modal = this.modalService.open(ModalMensajeComponent, {
                backdrop: "static",
                keyboard: false,
                size: 'sm',
                centered: true
              })
              modal.componentInstance.msg = 'Usuario registrado correctamente';
              modal.componentInstance.respuesta.subscribe(
                (result: any) => {
                  console.log(result);
                  if (result === true)
                    this.router.navigate([RutasConstantes.INICIO_SISTEMA]);
                }
              );
            }
          }
        );
      }
    );
/*
    this.service.registrarUsuario(cliente).subscribe(data => {
        this.response = data;
        if (this.response.codUsuario != null) {
          const modal = this.modalService.open(ModalMensajeComponent, {
            backdrop: "static",
            keyboard: false,
            size: 'sm',
            centered: true
          })
          modal.componentInstance.msg = 'Usuario registrado correctamente';
          modal.componentInstance.respuesta.subscribe(
            (result: any) => {
              console.log(result);
              if (result === true)
                this.router.navigate([RutasConstantes.INICIO_SISTEMA]);
            }
          );
        }
      }
    );
    */
  }

  // NAVEGACION
  public irIngresar() {
    this.router.navigate([RutasConstantes.INGRESO_SISTEMA]);
  }

  public irInicio() {
    this.router.navigate([RutasConstantes.INICIO_SISTEMA]);
  }
}
