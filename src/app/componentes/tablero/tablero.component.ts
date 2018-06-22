import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { DialogDataExampleDialogComponent } from '../dialog-data-example-dialog/dialog-data-example-dialog.component';
import Ws from '@adonisjs/websocket-client'
import { ConnectServer } from '../../services/connect-server';
@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {
  finished:boolean = false;
  matriz= new Array();
  players = {};
  current;
  colorLabel; cid; newgameLabel; wonLabel; laststart = 1;
  ws = Ws('ws://localhost:3333')
  channel;
  isReady=false;
  
  constructor(public dialog: MatDialog, private connectServer:ConnectServer) {      
    var row1 = [0,0,0,0,0,0,0];
    var row2 = [0,0,0,0,0,0,0];
    var row3 = [0,0,0,0,0,0,0];
    var row4 = [0,0,0,0,0,0,0];
    var row5 = [0,0,0,0,0,0,0];
    var row6 = [0,0,0,0,0,0,0];
    this.matriz.push(row1);
    this.matriz.push(row2);
    this.matriz.push(row3);
    this.matriz.push(row4);
    this.matriz.push(row5);
    this.matriz.push(row6);
    
    this.connectServer.getInfoUser(localStorage.getItem("idMe")).subscribe(
      (response) => {
        console.log(response);          
      },
      (error) => {
        console.log(error);            
      }
    );
   }

  ngOnInit() {

    this.players[1] = "Amarillo";
    this.players[2] = "Rojo";
    this.start();
    this.ws.connect();

    this.channel = this.ws.subscribe('conecta');
    const listen = this.ws.getSubscription('conecta');
    this.channel.emit('join',{user:localStorage.getItem("idMe")},function(data){
      console.log(data);
    });

    listen.on('joined',(data)=>{
      console.log(data);
    });

    listen.on('new-selection',(data)=>{
      this.makeMove(data.x, data.y, 0);
    });

    listen.on('winner',(data)=>{
      this.openFinishGame();
    });

    listen.on('current-turn',(data)=>{
      console.log("current turn: ",data);
      this.current = data;
    });

    listen.on('ready-game',(data)=>{
      alert("Empieza el juego!");
      console.log("CURRENT: ",data);
      this.isReady = true;
      this.current = data;
    });

  }

  start(){
    this.current = this.laststart = (this.laststart + 1) % 2;
    this.finished = false;
    this.colorLabel = this.players[this.current = (this.current + 1) % 2];
    for (var a = 0; a < 6; a++)//row
        for (var b = 0; b < 7; b++)//col
            this.matriz[a][b] = 0;

  }

  onClick(col, row){  
    //   console.log('color' + row + "" + col);
    if(!this.isReady) return;
    if(this.current != localStorage.getItem("idMe")) return;

    if (!this.finished){
      if (this.cellAt(row, col) == 0) {

        var data = {user:localStorage.getItem("idMe"),x:row,y:col}
        this.channel.emit('selected',data);

          this.makeMove(row, col, 0);
          //break;
      }
      /*for (row = 5; row >= 0; row--){
        // console.log("row, col ", row, col);
         
      }*/
    }
  }

  public makeMove(row, col, s) {
    this.matriz[row][col] = this.current;
    this.current = this.current == 1 ? 2 : 1;
    this.colorLabel = this.players[this.current];
    
  }

  cellAt(row, col) {
    // console.log("valor" + this.matriz[i][j], "C=" + i, "R=" + j);
      return this.matriz[row][col];
  }

  isCurrentColor(i, j) {
    return this.cellAt(i, j) === this.current;
  }

  isWiner(){
    this.finished = true;
    var mensaje = "El jugador " + this.players[this.current] + "gano. Quieres jugar un nuevo juego?";
    
  }

  openFinishGame() {
    this.dialog.open(DialogDataExampleDialogComponent, {
      data: {
        titulo : "Felicidades!!",
        ganador: this.players[this.current]
      }
    });

    this.start();
    this.finished = true;
  }
}

