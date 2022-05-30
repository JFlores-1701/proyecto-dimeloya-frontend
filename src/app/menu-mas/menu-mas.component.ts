import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalConfirmacionComponent} from '../components/utils/modal-confirmacion/modal-confirmacion.component';
import {RutasConstantes} from '../libs/rutas-constantes';
import {ModalVerPuntosComponent} from "./modal-ver-puntos/modal-ver-puntos.component";

@Component({
  selector: 'app-menu-mas',
  templateUrl: './menu-mas.component.html',
  styleUrls: ['./menu-mas.component.css']
})
export class MenuMasComponent implements OnInit {

  public json: any;
  public nombre: any;
  public correo: any;
  public codSuscri: string | undefined;
  public desSuscri: string | undefined;

  constructor(private modalService: NgbModal, private router: Router) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.json = JSON.parse(localStorage.getItem("usuario"));
    if (this.json.codUsuario == null) {
      this.router.navigate([RutasConstantes.INICIO_SISTEMA]);
    }
    this.nombre = this.json.nomUsuario + ' ' + this.json.apeUsuario;
    this.correo = this.json.emailUsuario;
    this.codSuscri = this.json.codSuscri;
    if (this.codSuscri === '1') {
      this.desSuscri = 'Free';
    }
    if (this.codSuscri === '2') {
      this.desSuscri = '1 Mes';
    }
    if (this.codSuscri === '3') {
      this.desSuscri = '3 Meses';
    }
  }

  public cerrarSesion() {
    const modal = this.modalService.open(ModalConfirmacionComponent, {
      backdrop: "static",
      keyboard: false,
      size: 'lg',
      centered: true
    });
    modal.componentInstance.respuesta.subscribe(
      (result: any) => {
        console.log(result);
        if (result === true) {
          var jsonUsuario = {};
          localStorage.setItem("usuario", JSON.stringify(jsonUsuario));
          this.router.navigate([RutasConstantes.INICIO_SISTEMA]);
        }
      }
    );
  }

  public verPuntos() {
    const modal = this.modalService.open(ModalVerPuntosComponent, {
      backdrop: "static",
      keyboard: false,
      size: 'lg',
      fullscreen: true
    });
  }

  // BOTONES NAVEGACION
  public irHome() {
    this.router.navigate([RutasConstantes.MENU_INICIO]);
  }

  public irNotificaciones() {
    this.router.navigate([RutasConstantes.MENU_NOTIFICACIONES]);
  }

  public irBuscar() {
    this.router.navigate([RutasConstantes.MENU_BUSCAR]);
  }

  public irFavoritos() {
    this.router.navigate([RutasConstantes.MENU_FAVORITOS]);
  }

  public irMas() {
    this.router.navigate([RutasConstantes.MENU_MAS]);
  }
}
