import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  title = 'Ahorcado';
  puntos: number = 0;
  diccPosition: number = 0;

  //palabras en juego
  palClave = ['PROGRAMACION','ANGULAR','MAPAS','INDEPENDIENTE','NARANJA','PERRO','XIFOIDEO','PERSONA',
                'LIBERTAD','PALABRA','OBJETO','PERDISTE','GANASTE','ELECTROCARDIOGRAMA','CALEIDOSCOPIO'];

  palabra:string = '';
  palabraOculta:string = '';
  
  intentos:number = 8;
  intntoes_usuarios:number = 0;
  win:boolean = false;
  lose:boolean = false;
  message:string = '';

  letters = ['A','B','C','D','E','F','G','H','I','J',
            'K','L','M','N','Ñ','O','P','Q','R','S',
            'T','U','V','W','X','Y','Z'];
  
  constructor(){
    this.selectWord();
  }

  ngOnInit(): void {
  }

  setAttempts(intnetos:number){
    this.intentos = intnetos;
  }

  getAttempts():number{
    return this.intentos;
  }


  checkLetter(letter:string):void{
    if(!this.palabra.includes(letter)){
      this.intntoes_usuarios += 1;
    }
    this.replaceWord(letter);
  }

  selectWord(){
    this.diccPosition = Math.floor(Math.random() * 15);
    this.palabra = this.palClave[this.diccPosition];
    this.palabraOculta = '_ '.repeat(this.palabra.length);
  }

  winVerification(){
    const WordArray = this.palabraOculta.split(' ');
    const WordString = WordArray.join('');
    if(WordString == this.palabra){
      this.message = 'Ganaste';
      this.puntos =+ 1;
      this.win = true;
      this.hideInterface();
    }

    if(this.intntoes_usuarios >= this.intentos){
      this.intntoes_usuarios = 8;
      this.message = 'Perdiste';
      this.lose = true;
      this.hideInterface();
    }
  }

  hideInterface(){
    if((this.win || this.lose) == true){
      const lettersBox = document.querySelector('.letters__container');
      if(lettersBox != null){lettersBox.classList.add('hide');}
    }
  }
  
  replaceWord(letter:string){
    const ArrayWord = this.palabraOculta.split(' ');

    for(let i = 0; i < this.palabra.length; i++){
      if(this.palabra[i] === letter){
        ArrayWord[i] = letter;
      }
    }

    this.palabraOculta = ArrayWord.join(' ');
    this.winVerification();
  }

  restartGame(){
    this.win = false;
    this.lose = false;
    this.intntoes_usuarios = 0;
    document.querySelector('.letters__container')?.classList.remove('hide');
    this.selectWord();
  }

}
