import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { Router } from '@angular/router';
import { User } from 'src/app/clases/user';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers:[AuthService]
})
export class RegistroComponent implements OnInit {

  user: User = new User();
  
  public load: boolean = false;

  registroForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
  });  

  constructor(
    private rutas: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {    
  }

  /**
   * Registro el usuario
   */
  async Registar(){

    const { email, password } = this.registroForm.value;
    
    try {
      const usuario = await this.authService.register(email, password);

      if(usuario){
        this.IrHome();        
      
      }
    }catch(error){
      console.log(error);
    }  


    //const { email, password } = this.registroForm.value;//extraigo email y pass
    //this.authService.register(email, password);
    
    //this.rutas.navigate(['home']);
    //timer para poner una animacion de carga, etc
    /**var modelo = this;

    setTimeout(function(){
      modelo.rutas.navigate(['home']);
    }, 2000); */
  }

  IrHome() { 
    var modelo = this;
    this.load = true;

    setTimeout(function(){
      modelo.rutas.navigate(['home']);
    }, 2000); 
  }

  Login(){
    this.rutas.navigate(['login']);
  }

}
