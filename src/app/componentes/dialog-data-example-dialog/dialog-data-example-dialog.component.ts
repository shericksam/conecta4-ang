import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-data-example-dialog',
  templateUrl: './dialog-data-example-dialog.component.html',
  styleUrls: ['./dialog-data-example-dialog.component.css']
})
export class DialogDataExampleDialogComponent implements OnInit {
  titulo;
  contenido;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.titulo = data.titulo;
    this.contenido = data.contenido;
  }

  ngOnInit() {
  }

}
