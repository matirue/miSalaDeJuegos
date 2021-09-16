import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/servicios/chat.service';
import { resolve } from '@angular/compiler-cli/src/ngtsc/file_system';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensaje: string = '';
  elemento: any;

  constructor(public chatSrv: ChatService) { 
    this.chatSrv.CargarMensaje().subscribe( () => { 
                                            this.elemento.scrollTop = this.elemento.scrollHeight; } );
  }


  ngOnInit(): void {
    setTimeout(()=>{
      this.elemento = document.getElementById('app-mensajes');
    },20)
  }


  EnviarMensaje(){

    if(this.mensaje.length === 0){
      return;
    }

    this.chatSrv.AgregarMensaje(this.mensaje);

    this.mensaje='';
           
  }

}
