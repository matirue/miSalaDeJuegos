import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers: [AuthService]
})
export class NavBarComponent implements OnInit {

  public userLogged: any;
  public ocultarLogin: boolean = true;
  public ocultarLogout: boolean = false;

  
  public load: boolean = false;

  constructor(
    private router: Router,
    private authServicio: AuthService, 
    public authFire: AngularFireAuth) { 

    this.authFire.authState.subscribe(res=>{
      if(res && res.uid){
        this.userLogged = res.email;
        this.ocultarLogin = false;
        this.ocultarLogout = true;

        console.log('User log -> ', this.userLogged);
      } else {
        
        this.ocultarLogin = true;
        this.ocultarLogout = false;

        console.log(' No hay usuario logueado ');
      }
    });
  }

  async ngOnInit() {
  }

  login(){ this.router.navigateByUrl('login'); }

  async logOut(){
    try{
      await this.authFire.signOut();

      this.router.navigateByUrl('/');

      
    }catch(error){ console.log(error); }
    

    var modelo = this;


    
    //this.router.navigateByUrl('home');
    //console.log('chau!');
  }


  home(){ this.router.navigateByUrl('home'); }
  quienSoy(){ this.router.navigateByUrl('quienSoy'); }
  historial(){ this.router.navigateByUrl('juegos/resultados'); }
  encuesta(){ this.router.navigateByUrl('juegos/encuesta'); }

}
