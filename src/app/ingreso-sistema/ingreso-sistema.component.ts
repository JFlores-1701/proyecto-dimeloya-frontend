import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalMensajeComponent} from '../components/utils/modal-mensaje/modal-mensaje.component';
import {RutasConstantes} from '../libs/rutas-constantes';
import {ClienteResponse, LoginCliente} from '../models/usuario.interface';
import {UsuarioService} from '../services/usuario.service';

@Component({
  selector: 'app-ingreso-sistema',
  templateUrl: './ingreso-sistema.component.html',
  styleUrls: ['./ingreso-sistema.component.css']
})
export class IngresoSistemaComponent implements OnInit {

  public formLogin: FormGroup;
  public msg = "Dato obligatorio";
  public response: ClienteResponse | undefined;

  constructor(private router: Router, private fb: FormBuilder, private service: UsuarioService, private modalService: NgbModal) {
    this.formLogin = this.createForm();
  }

  ngOnInit(): void {
  }

  private createForm() {
    return this.fb.group({
      correoElectronico: [null, [Validators.required]],
      contraseña: [null, [Validators.required]]
    })
  }

  public get getForm() {
    return this.formLogin;
  }

  public get fieldCorreoElectronico() {
    return this.getForm.get('correoElectronico');
  }

  public get fieldContrasena() {
    return this.getForm.get('contraseña');
  }

  // INGRESO SISTEMA
  public ingresar() {

    this.getForm.markAllAsTouched();
    if (this.getForm.invalid) return;

    const login: LoginCliente = {
      emailUsuario: this.fieldCorreoElectronico?.value,
      passUsuario: this.fieldContrasena?.value
    }

    console.log(login);

    this.service.ingresarAlSistema(login).subscribe(data => {
      this.response = data;

      if (this.response != null) {
        var jsonUsuario = {
          "codUsuario": this.response.codUsuario,
          "nomUsuario": this.response.nomUsuario,
          "apeUsuario": this.response.apeUsuario,
          "emailUsuario": this.response.emailUsuario,
          "passUsuario": this.response.passUsuario,
          "codSuscri": this.response.codSuscri
        };
        localStorage.setItem("usuario", JSON.stringify(jsonUsuario));
        this.irMenuPrincipal();
      } else {
        const modal = this.modalService.open(ModalMensajeComponent, {
          backdrop: "static",
          keyboard: false,
          size: 'sm',
          centered: true
        });
        modal.componentInstance.msg = 'Usuario y/o Contraseña incorrecta. Inténtalo nuevamente';
      }
    });
  }

  // NAVEGACION
  public irInicio() {
    this.router.navigate([RutasConstantes.INICIO_SISTEMA]);
  }

  public irRegistro() {
    this.router.navigate([RutasConstantes.REGISTRO_SISTEMA]);
  }

  public irMenuPrincipal() {
    this.router.navigate([RutasConstantes.MENU_INICIO]);
  }
}
