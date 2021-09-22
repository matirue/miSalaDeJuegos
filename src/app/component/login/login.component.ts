import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/clases/user';
import { AuthService } from 'src/app/servicios/auth.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {

  public userAdmin: User;
  public load: boolean = false;

  mensajeAlert: string = '';
  mostrarError: boolean = false;

  public mensajeValidacion = {
    'email': [
      {tipo: 'required', mesnaje: 'El email es requerido'},
      {tipo: 'email', mesnaje: 'Debe respetar el formato example@example.com.'},
    ],
    'password': [
      {tipo: 'required', mesnaje: 'El password es requerido'},
      {tipo: 'minlength', mesnaje: 'La Contraseña debe ttener un minimo de 6 caracteres.'},
    ]
  };

  loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
  });

  constructor(
    private rutas: Router,
    private servicio: UsuarioService,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.userAdmin = new User();

    this.loginForm = this.formBuilder.group({
      email:['', 
            [Validators.required, 
            Validators.email,
            Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password:['', [Validators.required, Validators.minLength(6)]]
    });
    
   }

  ngOnInit(): void {
  }


  /**campo email */
  get email_campo(){
    return this.loginForm.get('email');
  }
  get eamil_campoValido(){
    return this.email_campo?.touched && this.email_campo.valid;
  }
  get eamil_campoInvalido(){
    return this.email_campo?.touched && this.email_campo.invalid;
  }

  /**campo password */
  get password_campo(){
    return this.loginForm.get('password');
  }
  get password_campoValido(){
    return this.password_campo?.touched && this.password_campo.valid;
  }
  get password_campoInvalido(){
    return this.password_campo?.touched && (this.password_campo.value).minLength<6;
  }

  /**
   * Funcion que inicia session
   */
  async Ingresar(){

    const { email, password } = this.loginForm.value;
    

    try {
      const usuario = await this.authService.login(email, password);

      if(usuario){
        this.mostrarError = false;


        this.IrHome();
        
      }else{
        this.mensajeAlert = ' El usuario o contraseña ingresados son inexistente';
        this.mostrarError = true;
      }
    }catch(error){
      console.log(error);
      
    }
  }

  




  /***********************Rutas********************************* */
  IrHome() { 
    var modelo = this;
    this.load = true;

    setTimeout(function(){
      modelo.rutas.navigate(['home']);
    }, 2000); 
  }

  Registrar(){
    this.rutas.navigate(['registro']);
  }

  public InicioRapido(){
    this.userAdmin.email = "admin@admin.com";
    this.userAdmin.password = "123456";
    
    

  }
}
