import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiDigimonService {

  constructor(private http: HttpClient) { }


  public ObtenerDigimon(){
    return this.http.get("https://digimon-api.vercel.app/api/digimon");
  }

  public ObtenerDigBotones(cantidad: string){
  //public ObtenerDigBotones(cantidad: number){
    return this.http.get('https://digimon-api.vercel.app/api/digimon?count=' + cantidad);
  }
}
