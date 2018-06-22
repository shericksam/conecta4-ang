import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../componentes/login/login.component';
import { TableroComponent } from '../componentes/tablero/tablero.component';
import { AuthGuard } from '../services/auth-guard.service';
import { SalasComponent } from '../componentes/salas/salas.component';

//aqui los componentes a importar 

// y el servicio de auth

const routes: Routes = [  
  { path: '', redirectTo: 'singin', pathMatch: 'full' },
  { path: "singin", component: LoginComponent},
  { path: "tablero", component: TableroComponent,canActivate:[AuthGuard] },
  // { path: "sala", component: SalasComponent,canActivate:[AuthGuard] },
  { path: '**', component: LoginComponent }  
];
export const componentesI = [LoginComponent, TableroComponent]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  // declarations: []
})

export class AppRoutingModule { }
