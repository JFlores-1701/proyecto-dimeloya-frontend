import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RutasConstantes } from '../libs/rutas-constantes';

@Component({
  selector: 'app-inicio-sistema',
  templateUrl: './inicio-sistema.component.html',
  styleUrls: ['./inicio-sistema.component.css']
})
export class InicioSistemaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public irIngreso() {
    this.router.navigate([RutasConstantes.INGRESO_SISTEMA]);
  }

  public irRegistro() {
    this.router.navigate([RutasConstantes.REGISTRO_SISTEMA]);
  }
}
