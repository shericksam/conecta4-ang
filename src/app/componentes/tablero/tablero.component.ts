import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    this.imagen = new Image();
    this.imagen.src = "/assets/imagenes/bluedisc.png";
    
  }

  imagen;
  context: CanvasRenderingContext2D;
  contextDisc: CanvasRenderingContext2D;
  @ViewChild( 'lienzo' ) canvas: ElementRef;
  @ViewChild( 'dics' ) disc: ElementRef;


  ngAfterViewInit() {
    const canvas = this.canvas.nativeElement;
    this.context = canvas.getContext( '2d' );
    const canvasDisc = this.disc.nativeElement;
    this.contextDisc = canvasDisc.getContext( '2d' );

    this.tick();
  }

  tick() {
      requestAnimationFrame(() => this.tick() );
      const ctx = this.context;
      const ctxDisc = this.contextDisc;
      ctx.clearRect( 0, 0, 600, 400);
      ctxDisc.clearRect( 0, 0, 600, 720);

      ctx.lineWidth= 5;
      ctx.strokeStyle = "rgba(255,0,255,1)";
      //x , y, w , h
      ctx.beginPath();
      ctx.rect(190, 85, 100, 580);
      // ctx.
      ctx.stroke();
      ctx.closePath();


      ctxDisc.beginPath();
      ctx.canvas.addEventListener("click", () => {
        
      });
      ctxDisc.clearRect(0, 0, 82, 82);
      ctxDisc.drawImage(this.imagen, 199, this.posy);
      if(this.posy < 570){

        this.posy += 7;
        // setInterval(this.caer, 20);
      }
      ctxDisc.closePath();

      ctx.beginPath();
      ctx.rect(310, 85, 100, 580);
      ctx.stroke();
      ctx.closePath();

      
      ctx.beginPath();
      ctx.rect(430, 85, 100, 580);
      ctx.stroke();
      ctx.closePath();
      
      
      ctx.beginPath();
      ctx.rect(550, 85, 100, 580);
      ctx.stroke();
      ctx.closePath();
      
      
      ctx.beginPath();
      ctx.rect(670, 85, 100, 580);
      ctx.stroke();
      ctx.closePath();
      
      
      ctx.beginPath();
      ctx.rect(790, 85, 100, 580);
      ctx.stroke();
      ctx.closePath();
      
      
      ctx.beginPath();
      ctx.rect(910, 85, 100, 580);
      ctx.stroke();
      ctx.closePath();

      // ctx.rect(298, 85, 130, 580);
      // ctx.stroke();

      // ctx.rect(428, 85, 130, 580);
      // ctx.stroke();
      // draw stuff
  }
  posy = 93;

  caer(){
    // requestAnimationFrame(() => this.caer() );
    // this.contextDisc.clearRect(0, 0, 82, 82);
    // this.contextDisc.beginPath();
    // this.contextDisc.destroy();
    // ctx.drawImage
    
  }
}
