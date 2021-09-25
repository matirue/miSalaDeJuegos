import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Encuesta } from '../clases/encuesta';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  private itemCollecttion: AngularFirestoreCollection<Encuesta> | undefined;
  public unaEncuesta: Encuesta[] = [];

  private url: string = '/encuesta';

  constructor(
      public authSrv: AuthService,
      private authFire: AngularFirestore
  ) { }

  cargarEncuestas() {

    this.itemCollecttion = this.authFire.collection<Encuesta>(this.url);

    return this.itemCollecttion.valueChanges().pipe(map( (encuesta: Encuesta[] ) => {
        // console.log(encuesta);
        this.unaEncuesta = [];
        for (let datos of encuesta) {
          this.unaEncuesta.unshift(datos);
        }
        return this.unaEncuesta;
      }))
  }

  agregarEncuesta(nombre: string, apellido: string, edad: string, telefono: string,
                  juego: string, puntuacion: string, opinion: string, terminos: string) {
    
    let encuesta: Encuesta = {
      uid: this.authSrv.usuario.uid,
      umail: this.authSrv.usuario.email,
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      telefono: telefono,
      juego: juego,
      puntuacion: puntuacion,
      opinion: opinion,
      terminos: terminos,
      
    }
    
    return this.itemCollecttion?.add(encuesta);
  }

}
