import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EncuestaService } from 'src/app/servicios/encuesta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  public formulario!: FormGroup;
  public encuesta?: Observable<any[]>;
  public elemento: any;

  constructor(
      private router: Router,
      private frB: FormBuilder, 
      public unaEncuesta: EncuestaService,
  ) 
    {
      this.unaEncuesta.cargarEncuestas().subscribe( () => { });
    }

  ngOnInit(): void {
    this.formulario = this.frB.group( {
      'nombre': ['', [Validators.required]],
      'apellido': ['', Validators.required],
      'edad': ['', [Validators.required, Validators.min(18), Validators.max(110)]],
      'telefono': ['', [Validators.required]],
      'juego': ['', [Validators.required]],
      'puntuacion': ['', [Validators.required]],
      'opinion': ['', [Validators.required]],
      'terminos': ['', Validators.required],
    });
  }

  aceptar(): void {
    // console.log(this.forma);
    // console.log(this.forma.getRawValue()); //te devuelve un JSON
    // console.log(this.forma.get('nombre').value); //te da un campo puntual
    // console.log(this.forma.controls['nombre'].value); //te da un campo puntual otra forma

    var nombre = this.formulario?.controls['nombre'].value;
    var apellido = this.formulario?.controls['apellido'].value;
    var edad = this.formulario?.controls['edad'].value;
    var telefono = this.formulario?.controls['telefono'].value;
    var juego = this.obtenerValor(this.formulario?.controls['juego'].value);
    var puntuacion = this.formulario?.controls['puntuacion'].value;
    var opinion = this.formulario?.controls['opinion'].value;
    var terminos = this.formulario?.controls['terminos'].value;

    
    this.unaEncuesta.agregarEncuesta(nombre, apellido, edad, telefono, juego, puntuacion, opinion, terminos)?.finally( () =>{
            this.muestraMensaje("correcta");

          }).catch( (err: any) => {

            this.muestraMensaje("error");
            

          });
  }

  obtenerValor(juego: string): string {
    switch (juego) {
      case 'A':
        juego = "Ahorcado";
        break;
      case 'M':
        juego = "Mayor o Menor";
        break;
      case 'C':
        juego = "Colores";
        break;
      case 'P':
        juego = "Preguntados";
        break;
    }
    return juego;
  }


  //probando el swal
  muestraMensaje(aux: string){
    if(aux == "correcta"){
      Swal.fire({
        icon: 'success',
        title: '¡Muchas gracias por su tiempo!',
        text: 'Encuesta enviada exictosamente! ',
      }).finally(()=>{
        this.router.navigate(['/home']);
      });
    }
    if(aux == "error"){
      Swal.fire({
        icon: 'error',
        title: 'ERROR!',
        text: 'Ocurrio un error en la carga de la encuesta',
      }).finally(()=>{
        this.router.navigate(['/home']);
      });
    }
  }

}
