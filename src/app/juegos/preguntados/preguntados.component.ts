import { Component, OnInit } from '@angular/core';
import { ApiDigimonService } from 'src/app/servicios/api-digimon.service';
import { GameScoresService } from 'src/app/servicios/game-scores.service';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {

  numero: number = 1;
  vamos: boolean = false;

  puntos: number = 0;
  vidas: number = 4;
  vidasTotal: number = 4;
  win: boolean = false;
  lose: boolean = false;
  mensajeFinal: string = '';
  mensajeWin: string = '';
  mensajeLose: string = '';
  smsFinal: boolean = false;


  //imagenes
  imgDigimon: any;
  tsunomon: any; // 1 compa;ero de quien es
  birdramon: any; //20 preguntar q tipo de digimon es
  kabuterimon: any; //22 evolucion de que digimon es
  wizardmon: any; // 74 preguntar por quien se sacrifico
  imperialdramon: any; //199 preguntar en que temporada aparece
  myotismon: any; // 58 preguntar a que digimon elegido tenia bajo su control (gatomon)

  /**pregunta */
  hacerPregunta!: string;
  rta!: string;

  /**bonotnes */
  boton_1!: string;
  boton_2!: string;
  boton_3!: string;
  boton_4!: string;

  
  
  //**PREGUNTAS */

  //formato       0 numero de pregunta 
  //              1 ->pregunta  
  //              2 al 5 -> opciones
  //              6 -> indice de la respuesta correcta
  pregunta_01: string[] = ['1', '¿Quién es el compañero de Tsunomon?', 'Yagami Taichi', 'Ishida Yamato', 'Ash ketchum', 'Gohan', '3'];
  pregunta_02: string[] = ['2', '¿Qué tipo de digimon es Birdramon?', 'Champion', 'Rookie', 'Volador', 'Fuego', '2'];
  pregunta_03: string[] = ['3', 'Kabuterimon es la evolución de:', 'Agumon', 'Etemon', 'Palmon', 'Tentomon', '5'];
  pregunta_04: string[] = ['4', '¿A quienes protegió Wizardmon, dando su vida ?', 'Sora y Piyomon', 'Izzy y Tentomon', 'Tichi y Agumon', 'Kari y Gatomon', '5'];
  pregunta_05: string[] = ['5', '¿En qué temporada aparece Imperialdramon?', 'Digimon Tamers', 'Digimon Frontier', 
                                                                        'Digimon Adventure 02', 'Digimon Adventure', '4'];
  pregunta_06: string[] = ['6', '¿Cómo se llama el digimon al que Myotismon manipulaba?', 'Gatomon', 'Palmon', 'Leomon', 'Gabumon', '2'];

  constructor(
    private apiDigimon: ApiDigimonService,
    public res: GameScoresService) 
  {
    //this.numero = Math.floor(Math.random() * (6 - 1)+1), //console.log(this.numero),
    //this.Iniciar();

    console.log(parseInt(this.pregunta_02[0]));

    this.apiDigimon.ObtenerDigimon().subscribe( (digimon: any) => { //console.log(digimon);
        this.tsunomon = digimon[1];
        this.birdramon = digimon[20];
        this.kabuterimon = digimon[22];
        this.wizardmon = digimon[74];
        this.imperialdramon = digimon[199];
        this.myotismon = digimon[58]

    } )
  }

  ngOnInit(): void {
  }

  Iniciar()
  {
      this.vamos = true;

      // this.hacerPregunta = this.pregunta_01[1];
      // this.boton_1 = this.pregunta_01[2];
      // this.boton_2 = this.pregunta_01[3];
      // this.boton_3 = this.pregunta_01[4];
      // this.boton_4 = this.pregunta_01[5];

      // this.imgDigimon = this.tsunomon;

      // this.rta = this.pregunta_01[6];
         
      this.SiguienteRonda(this.numero);

      console.log("inicio: rta -> ", this.rta);
  } 

  SiguienteRonda(numero: number){

    console.log(this.numero);

    if(this.numero == parseInt(this.pregunta_01[0]))
    {
      this.hacerPregunta = this.pregunta_01[1];
      this.boton_1 = this.pregunta_01[2];
      this.boton_2 = this.pregunta_01[3];
      this.boton_3 = this.pregunta_01[4];
      this.boton_4 = this.pregunta_01[5];

      this.imgDigimon = this.tsunomon;

      this.rta = this.pregunta_01[6];
      //console.log("rta del if -> "); console.log(this.rta);
      
      //this.numero++;    
    }

    console.log('pregunta: ' , parseInt(this.pregunta_02[0]));
    console.log('numero: ' , this.numero);
    if(this.numero == parseInt(this.pregunta_02[0]))
    {
      this.imgDigimon = this.birdramon;

      this.hacerPregunta = this.pregunta_02[1];
      this.boton_1 = this.pregunta_02[2];
      this.boton_2 = this.pregunta_02[3];
      this.boton_3 = this.pregunta_02[4];
      this.boton_4 = this.pregunta_02[5];

      this.rta = this.pregunta_02[6];
      //console.log("rta del if -> "); console.log(this.rta);
      
      //this.numero++;    
    }
    if(this.numero == parseInt(this.pregunta_03[0]))
    {
      this.imgDigimon = this.kabuterimon;

      this.hacerPregunta = this.pregunta_03[1];
      this.boton_1 = this.pregunta_03[2];
      this.boton_2 = this.pregunta_03[3];
      this.boton_3 = this.pregunta_03[4];
      this.boton_4 = this.pregunta_03[5];

      this.rta = this.pregunta_03[6];  
      //console.log("rta del if -> "); console.log(this.rta);  
      
      //this.numero++;      
    }
    if(this.numero == parseInt(this.pregunta_04[0]))
    {
      this.imgDigimon = this.wizardmon;

      this.hacerPregunta = this.pregunta_04[1];
      this.boton_1 = this.pregunta_04[2];
      this.boton_2 = this.pregunta_04[3];
      this.boton_3 = this.pregunta_04[4];
      this.boton_4 = this.pregunta_04[5];

      this.rta = this.pregunta_04[6];
      
      //this.numero++;    
    }
    if(this.numero == parseInt(this.pregunta_05[0]))
    {
      this.imgDigimon = this.imperialdramon;

      this.hacerPregunta = this.pregunta_05[1];
      this.boton_1 = this.pregunta_05[2];
      this.boton_2 = this.pregunta_05[3];
      this.boton_3 = this.pregunta_05[4];
      this.boton_4 = this.pregunta_05[5];

      this.rta = this.pregunta_05[6];
      
      //this.numero++;    
    }
    if(this.numero == parseInt(this.pregunta_06[0]))
    {
      this.imgDigimon = this.myotismon;

      this.hacerPregunta = this.pregunta_06[1];
      this.boton_1 = this.pregunta_06[2];
      this.boton_2 = this.pregunta_06[3];
      this.boton_3 = this.pregunta_06[4];
      this.boton_4 = this.pregunta_06[5];

      this.rta = this.pregunta_06[6];
      //console.log("rta del if -> "); console.log(this.rta);
    } 
    
     

  }

  Control(boton: number){

    if(boton == parseInt(this.rta) && this.vidas>0 && this.puntos < 3){
      this.mensajeWin = 'Correcto!';
      this.win = true;
      this.lose = false;
      this.numero++;  
      this.puntos++;
      
      this.SiguienteRonda(this.numero);
      
    }
    else if(boton != parseInt(this.rta) && this.vidas>0 && this.puntos < 3){
      this.mensajeLose = 'Incorrencto!';
      this.win = false;
      this.lose = true;
      this.rta = '';
      this.numero++;  
      this.vidas--;  

      this.SiguienteRonda(this.numero);
    }



    if(this.puntos === 3){
      
      this.res.agregarResultado('Win', 'Preguntados');

      this.mensajeFinal = 'GANASTE!!!';
      this.rta = '';
      this.smsFinal = true;
      this.win = false;
      this.lose = false;
    }


    if(this.vidas === 0){

      this.res.agregarResultado('Lose', 'Preguntados');

      this.mensajeFinal = 'Fin del juego!!!';
      this.rta = '';
      this.smsFinal = true;
      this.win = false;
      this.lose = false;
    }  
  }

  Repetir(){
    this.numero = 1;
    this.vidas = 4;
    this.puntos = 0;
    this.win = false;
    this.lose = false;
    this.smsFinal = false;
    this.rta = '';

    this.Iniciar();

  }
  

}
