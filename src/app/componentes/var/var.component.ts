import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { SalasComponent } from '../salas/salas.component';
import { ConnectServer } from '../../services/connect-server';
import { Router } from '@angular/router';

@Component({
  selector: 'componentes/var',
  templateUrl: './var.component.html',
  styleUrls: ['./var.component.css']
})
export class VarComponent {
  toggle:boolean = false;
  estadisticasI =  {};
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver,public dialog: MatDialog
    ,private connectServer:ConnectServer,private router: Router) {
      this.connectServer.getInfoUser(localStorage.getItem("idMe")).subscribe(
        (response) => {
          console.log(response.estadisticas);     
          this.estadisticasI = response.estadisticas;
        },
        (error) => {
          console.log(error);            
        }
      );
    }
  
    cerrar(){
      localStorage.clear();
      this.router.navigateByUrl('/');
    }
}
