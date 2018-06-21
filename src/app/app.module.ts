import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './componentes/app-component/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VarComponent } from './componentes/var/var.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatDialogModule } from '@angular/material';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { DialogDataExampleDialogComponent } from './componentes/dialog-data-example-dialog/dialog-data-example-dialog.component';
import { ConnectServer } from './services/connect-server';
import { AuthService } from './services/auth.service';
import { SinginComponent } from './componentes/singin/singin.component';
import { Http, HttpModule } from '@angular/http';
import { AppRoutingModule } from './routing/app-routing.module';
import { AuthGuard } from './services/auth-guard.service';
import { SalasComponent } from './componentes/salas/salas.component';

@NgModule({
  declarations: [
    AppComponent,
    VarComponent,
    TableroComponent,
    LoginComponent,
    DialogDataExampleDialogComponent,
    SinginComponent,
    SalasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatDialogModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ConnectServer, AuthService, AuthGuard],
  entryComponents: [DialogDataExampleDialogComponent, SinginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
