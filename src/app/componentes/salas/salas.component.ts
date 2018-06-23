import { Component, OnInit, Inject } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ConnectServer } from '../../services/connect-server';
@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})
export class SalasComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, 
      private connectServer:ConnectServer) { }
  estadisticas = {};
  ngOnInit() {
    
  }

}
