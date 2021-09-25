import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiDigimonService } from 'src/app/servicios/api-digimon.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { GameScoresService } from 'src/app/servicios/game-scores.service';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {

  mostrarDigimon!: any;
  iniciar: boolean = false;

  imgDigimon: any;

  digimon: any;
  arrayDigimon: any = [];

  respuestaCorrecta: boolean = false;
  mensajeCorrecto: string = '';


  constructor(
    private router: Router,
    public authSrv: AuthService,
    private apiSrv: ApiDigimonService,
    public res: GameScoresService
  ) {
    /**
     * this.apiSrv.ObtenerDigimon().subscribe( 
      (digimon: any)=>{ 
                        console.log(digimon);
                        this.mostrarDigimon = digimon[2];//le asigno la posicion del array entre []
                        this.divermon = digimon[100];
                      }) **/
   }

  ngOnInit(): void {
    this.ObtenerListaDigimon();//busco los dig

    this.iniciar = true;

  }

  Iniciar(){
    this.iniciar = true;
  }

  /**Trae del api cada digimon */
  DigimonSeleccionado(){

    this.apiSrv.ObtenerDigimon().subscribe( (dig: any) => { 
      this.digimon = dig[0];
      this.imgDigimon = this.digimon.img;
      this.TraerOpvionesDigi('3');
    },
    error => { console.log(error) });
  }

  /**Trae la lista de personajes */
  ObtenerListaDigimon(){
    this.DigimonSeleccionado();
  }

  /**trae los digimon opc para los botones */
  TraerOpvionesDigi(tres: string){

    this.apiSrv.ObtenerDigBotones(tres).subscribe((dig:any) => {
      this.arrayDigimon = dig;
      //console.log(this.arrayDigimon);
    },
    error => { console.log(error) });
  }

  RespuestaCorrecta(dig: string){

    if(dig == this.digimon.name)
    {
      this.res.agregarResultado('Win', 'Preguntados');

      this.respuestaCorrecta = true;
      this.mensajeCorrecto = "BIEN, Respuesta Correcta!";
    }
    else{

      this.res.agregarResultado('Lose', 'Preguntados');

      this.mensajeCorrecto = "Incorrecto!";
      this.respuestaCorrecta = true;

    }
    this.ObtenerListaDigimon();
  }

  Repetir(){
    this.mensajeCorrecto = '';
    this.respuestaCorrecta = false;

  }




  

}
