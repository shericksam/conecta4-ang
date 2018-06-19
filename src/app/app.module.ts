import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './componentes/app-component/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VarComponent } from './componentes/var/var.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { TableroComponent } from './componentes/tablero/tablero.component';

@NgModule({
  declarations: [
    AppComponent,
    VarComponent,
    TableroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
