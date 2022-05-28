import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBuscarComponent } from './menu-buscar/menu-buscar.component';
import { ModalRestauranteSeleccionadoComponent } from './menu-buscar/modal-restaurante-seleccionado/modal-restaurante-seleccionado.component';
import { ModalVerReseniasComponent } from './menu-buscar/modal-ver-resenias/modal-ver-resenias.component';
import { ModalReseniaRegistradaComponent } from './menu-buscar/modal-resenia-registrada/modal-resenia-registrada.component';
import { ModalVerPlatosComponent } from './menu-buscar/modal-ver-platos/modal-ver-platos.component';
import { InicioSistemaComponent } from './inicio-sistema/inicio-sistema.component';
import { IngresoSistemaComponent } from './ingreso-sistema/ingreso-sistema.component';
import { RegistroSistemaComponent } from './registro-sistema/registro-sistema.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuInicioComponent } from './menu-inicio/menu-inicio.component';
import { MenuMasComponent } from './menu-mas/menu-mas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ModalConfirmacionComponent } from './components/utils/modal-confirmacion/modal-confirmacion.component';
import { ModalRegistrarReseniaComponent } from './menu-buscar/modal-registrar-resenia/modal-registrar-resenia.component';
import { MenuNotificacionesComponent } from './menu-notificaciones/menu-notificaciones.component';
import { MenuFavoritosComponent } from './menu-favoritos/menu-favoritos.component';
import { UsuarioService } from './services/usuario.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ModalMensajeComponent } from './components/utils/modal-mensaje/modal-mensaje.component';
import { RestauranteService } from './services/restaurante.service';
import { ModalVerPuntosComponent } from './menu-mas/modal-ver-puntos/modal-ver-puntos.component';
import { ModalVideosDisponiblesComponent } from './menu-mas/modal-videos-disponibles/modal-videos-disponibles.component';
import { ModalCanjearPuntosComponent } from './menu-mas/modal-canjear-puntos/modal-canjear-puntos.component';
import { ModalCompartirEnlaceComponent } from './menu-mas/modal-compartir-enlace/modal-compartir-enlace.component';
import {NgxSpinnerModule} from "ngx-spinner";
import {InterceptorService} from "./services/interceptor.service";
import { ModalAgregarPuntosComponent } from './menu-mas/modal-agregar-puntos/modal-agregar-puntos.component';
import { ModalPagoPuntosComponent } from './menu-mas/modal-pago-puntos/modal-pago-puntos.component';
import { ModalPagoExitosoComponent } from './menu-mas/modal-pago-exitoso/modal-pago-exitoso.component';
import { ElegirSuscripcionComponent } from './registro-sistema/elegir-suscripcion/elegir-suscripcion.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuBuscarComponent,
    ModalRestauranteSeleccionadoComponent,
    ModalVerReseniasComponent,
    ModalReseniaRegistradaComponent,
    ModalVerPlatosComponent,
    InicioSistemaComponent,
    IngresoSistemaComponent,
    RegistroSistemaComponent,
    MenuInicioComponent,
    MenuMasComponent,
    ModalConfirmacionComponent,
    ModalRegistrarReseniaComponent,
    MenuNotificacionesComponent,
    MenuFavoritosComponent,
    ModalMensajeComponent,
    ModalVerPuntosComponent,
    ModalVideosDisponiblesComponent,
    ModalCanjearPuntosComponent,
    ModalCompartirEnlaceComponent,
    ModalAgregarPuntosComponent,
    ModalPagoPuntosComponent,
    ModalPagoExitosoComponent,
    ElegirSuscripcionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [UsuarioService, RestauranteService, { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]

})
export class AppModule { }
