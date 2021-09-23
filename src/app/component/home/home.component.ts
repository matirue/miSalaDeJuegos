import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarioActual: string;

  constructor(
            private servicio: UsuarioService,
            private router: Router) { 
    this.usuarioActual = servicio.nombreUsuario;
  }

  ngOnInit(): void {
  }


  goAhorcado(){
    this.router.navigate(["juegos/ahorcado"]);
  }

  goMayorMenor(){
    this.router.navigate(["juegos/mayorMenor"]);
  }

  goPreguntados(){
    this.router.navigate(["juegos/preguntados"]);
  }
  
  goAdivinarColor(){
    this.router.navigate(["juegos/adivinarColor"]);
  }

}
