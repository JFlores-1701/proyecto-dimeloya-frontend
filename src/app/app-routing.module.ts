import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoSistemaComponent } from './ingreso-sistema/ingreso-sistema.component';
import { InicioSistemaComponent } from './inicio-sistema/inicio-sistema.component';
import { MenuBuscarComponent } from './menu-buscar/menu-buscar.component';
import { MenuFavoritosComponent } from './menu-favoritos/menu-favoritos.component';
import { MenuInicioComponent } from './menu-inicio/menu-inicio.component';
import { MenuMasComponent } from './menu-mas/menu-mas.component';
import { MenuNotificacionesComponent } from './menu-notificaciones/menu-notificaciones.component';
import { RegistroSistemaComponent } from './registro-sistema/registro-sistema.component';

const routes: Routes = [
  { path: 'inicio-sistema', component: InicioSistemaComponent },
  { path: 'ingreso-sistema', component: IngresoSistemaComponent },
  { path: 'registro-sistema', component: RegistroSistemaComponent },

  { path: 'menu-inicio', component: MenuInicioComponent },
  { path: 'menu-buscar', component: MenuBuscarComponent },
  { path: 'menu-buscar/:nombre', component: MenuBuscarComponent },
  { path: 'menu-notificaciones', component: MenuNotificacionesComponent },
  { path: 'menu-mas', component: MenuMasComponent },
  { path: 'menu-favoritos', component: MenuFavoritosComponent },

  { path: '', redirectTo: '/inicio-sistema', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
