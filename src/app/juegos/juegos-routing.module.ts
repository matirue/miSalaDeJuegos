import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardsService } from '../guards/auth-guards.service';
import { AdivinarColorComponent } from './adivinar-color/adivinar-color.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { MayorMenorComponent } from './mayor-menor/mayor-menor.component';
import { PreguntadosComponent } from './preguntados/preguntados.component';
import { ResultadosComponent } from './resultados/resultados.component';

const routes: Routes = [
  { 
    path:'ahorcado', 
    component: AhorcadoComponent,
    canActivate: [AuthGuardsService] 
  },
  { 
    path:'adivinarColor', 
    component: AdivinarColorComponent,
    canActivate: [AuthGuardsService] 
  },
  { 
    path:'mayorMenor', 
    component: MayorMenorComponent,
    canActivate: [AuthGuardsService] 
  },
  { 
    path:'preguntados', 
    component: PreguntadosComponent,
    canActivate: [AuthGuardsService] 
  },
  { 
    path:'resultados', 
    component: ResultadosComponent,
    canActivate: [AuthGuardsService] 
  },
  { 
    path:'encuesta', 
    component: EncuestaComponent,
    canActivate: [AuthGuardsService] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
