import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged: any = false;

  constructor(
    public afAuth: AngularFireAuth
  ) { 
    afAuth.authState.subscribe(user=>(this.isLogged = user));
  }

  /**
   * Funcion para iniciar sesion
   */
  async login(email: string, password: string){
    try{
        const retorno = await this.afAuth.signInWithEmailAndPassword(email, password);

        return retorno; 
    }catch(error){
        console.log('Error en el login -> ', error);
        return null;
    }
    

  }

  /**
   * Funcion que registra en la db a un nuevo usuario
   * @param user
   */
  async register(email: string, password: string){

    try{
        const retorno = await this.afAuth.createUserWithEmailAndPassword(email, password);

        return retorno; 
    }catch(error){
        console.log('Error en el registro -> ', error);
        return null;
    }
  }

  /**
   * Funcion para cerrar la sesion del usuario
   */
  async logout(){
    try{
      await this.afAuth.signOut();
    }catch(error){
      console.log('Error en el logout -> ', error);
    }

  }

  getCurrentUser(){
    return this.afAuth.authState.pipe(this.isLogged).toPromise();
  }
}

