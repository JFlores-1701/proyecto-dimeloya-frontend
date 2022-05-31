import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {PlatoService} from "../../services/plato.service";
import {Plato} from "../../models/plato.interface";

@Component({
  selector: 'app-modal-ver-platos',
  templateUrl: './modal-ver-platos.component.html',
  styleUrls: ['./modal-ver-platos.component.css']
})
export class ModalVerPlatosComponent implements OnInit {

  @Input() nombre!: string;
  @Input() lstPlatos: Plato[] = [];
  lstMenu: Plato[] = [];
  lstAperitivo: Plato[] = [];
  lstPiqueos: Plato[] = [];

  constructor(private activeModal: NgbActiveModal, private service: PlatoService) {
  }

  ngOnInit(): void {
    this.listar();
  }

  public cerrar() {
    this.activeModal.close();
  }

  public aceptar() {
    this.cerrar();
  }

  public listar() {
    this.service.listarPorNombre(this.nombre).subscribe(data => {
      this.lstPlatos = data;
    })
    console.log(this.lstPlatos);
    if (this.lstPlatos.length > 0) {
      this.lstMenu = this.lstPlatos.filter(e => e.catePlato === 'Menu');
      this.lstPiqueos = this.lstPlatos.filter(e => e.catePlato === 'Piqueos');
      this.lstAperitivo = this.lstPlatos.filter(e => e.catePlato === 'Aperitivos');
    }
  }
}
