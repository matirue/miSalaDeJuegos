import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  nombreUsuario: string;

  constructor() { 
    this.nombreUsuario = '';
  }

  
}
