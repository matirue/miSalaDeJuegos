import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameScoresService } from 'src/app/servicios/game-scores.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  public resultados!: Observable<any[]>;
  auxiliar: any;

  constructor(public score: GameScoresService) { 

      this.score.cargarResultado().subscribe( () => {

          if(this.auxiliar){
              setTimeout( () => { this.auxiliar.scrollTop = this.auxiliar.scrollHeight; }, 200);
          }
      });
  }

  ngOnInit(): void {
  }

}
