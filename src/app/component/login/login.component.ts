import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private rutas: Router,
    private servicio: UsuarioService
  ) { }

  ngOnInit(): void {
  }

  Siguiente(){

    this.servicio.nombreUsuario = "escribiendo en el servicio";

    //this.rutas.navigate(['home']);
    //timer para poner una animacion de carga, etc
    var modelo = this;

    setTimeout(function(){
      modelo.rutas.navigate(['home']);
    }, 2000);
  }

  Registrar(){
    this.rutas.navigate(['registro']);
  }
}
