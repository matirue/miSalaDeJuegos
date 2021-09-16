import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Mensaje } from '../interface/mensaje';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollections: AngularFirestoreCollection<Mensaje> | undefined;
  public chats: Mensaje[] =[];
  //public nombreUser: any = localStorage.getItem('email');
  public nombreUser: any;

  constructor(public aFire: AngularFirestore, public authFire: AngularFireAuth) { 

    this.authFire.authState.subscribe(res=>{
      if(res && res.uid){
        this.nombreUser = res.email;        
      }
    });
  }


  CargarMensaje(){

    this.itemsCollections = this.aFire.collection<Mensaje>('chats',
                                                          ref=>ref.orderBy('fecha','desc').limit(5));

    return this.itemsCollections.valueChanges().pipe(

      map( (mensajes: Mensaje[]) => {

          this.chats = [];

          for(let sms of mensajes){ this.chats.unshift(sms); }

          return this.chats;
      })

    )
  } //Fin CargarMensaje

  AgregarMensaje(sms: string){

    let dato: Date = new Date();
    let tiempo = dato.getHours() + ":" + dato.getMinutes();
    
    let retMensaje: Mensaje = {
      nombre: this.nombreUser,
      mensaje: sms,
      fecha: new Date().getTime(),
      hora: tiempo
    }

    return this.itemsCollections?.add(retMensaje)

  }


}


