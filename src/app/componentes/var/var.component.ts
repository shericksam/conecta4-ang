import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { SalasComponent } from '../salas/salas.component';

@Component({
  selector: 'componentes/var',
  templateUrl: './var.component.html',
  styleUrls: ['./var.component.css']
})
export class VarComponent {
  toggle:boolean = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver,public dialog: MatDialog) {}
  
  estadisticas(){
    this.dialog.open(SalasComponent, {
      
    });
  }
}
