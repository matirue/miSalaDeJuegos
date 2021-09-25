import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Scores } from '../clases/scores';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameScoresService {

  private itemCollection: AngularFirestoreCollection<Scores> | undefined;
  public resultados: Scores[] = [];

  constructor(
      private authFire: AngularFirestore,
      public authSvc: AuthService
  ) { }

  cargarResultado(){

    this.itemCollection = this.authFire.collection<Scores>( 'scores', aux => aux.orderBy('fecha', 'desc').limit(50));

    return this.itemCollection.valueChanges().pipe(map((resultados: Scores[]) => {

        this.resultados = [];

        for(let res of resultados){ this.resultados.unshift(res); }

        return this.resultados;
    }))
                                                          
  }


  agregarResultado(estado: string, juego: string){

    let resultados: Scores = {

      fecha: new Date().getTime(),
      estado: estado,
      juego: juego,
      uid: this.authSvc.usuario.uid,
      uemail: this.authSvc.usuario.email,

    }
    return this.itemCollection?.add(resultados);
    
  }
}
