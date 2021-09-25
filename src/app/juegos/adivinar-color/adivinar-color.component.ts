import { Component, OnInit } from '@angular/core';
import { GameScoresService } from 'src/app/servicios/game-scores.service';

@Component({
  selector: 'app-adivinar-color',
  templateUrl: './adivinar-color.component.html',
  styleUrls: ['./adivinar-color.component.css']
})
export class AdivinarColorComponent implements OnInit {

  dificultad=4;
  oportunidades=3;
  isJugando=true;

  colores: string[] = [];
  ganador:string = '';
  intentos:number = 0;
  unColor = []

  mensajeFinal:string = "";
  smsFinal: boolean = false;

  puntos: number = 0;


  constructor(public res: GameScoresService) { }

  ngOnInit(): void {
    this.empezarJuego();
  }


  empezarJuego(){
    this.smsFinal = false;

    this.colores=[];
    this.ganador="";
    this.intentos=0;
    this.isJugando=true;
    this.mensajeFinal ="";

    console.log("inicie")
    for(let i=1 ;  i<=this.dificultad ; i++)
    {
      this.colores.push(this.generarColoresRandom());
    }

    //Aqui elegimos al ganador
    var myNumeroAleatorio = Math.floor(Math.random()*(this.dificultad-1))+1;
    this.ganador=this.colores[myNumeroAleatorio];
  }


  colorClick(colorClickeado: string){
 
    this.intentos++;

    if(this.oportunidades==this.intentos){
      this.perdiste();
      this.isJugando=false;
      return;
    }

    if(colorClickeado==this.ganador){
      this.ganaste();
      this.isJugando=false;
      return;
    }

  }

  ganaste(){
    this.smsFinal = true;
    this.mensajeFinal="BIEN!! HAZ GANADO!!!";
    this.puntos++;

    this.res.agregarResultado('Win', 'Colores');

  }

  perdiste(){
    this.smsFinal = true;
    this.mensajeFinal="SE TE ACABARON LOS INTENTOS!!! ";

    this.res.agregarResultado('Lose', 'Colores');
  }


  public generarColoresRandom(){
    let long=4;
    const caracteres = "0123456789ABCDEF";
    var color = "";
   
    for (let i=0; i<long; i++) color += caracteres.charAt(Math.floor(Math.random()*caracteres.length));
    color="#"+color;


    return color;

  }

}
