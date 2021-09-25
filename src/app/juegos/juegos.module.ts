import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';
import { FormsModule } from '@angular/forms';
import { ChatModule } from '../component/chat/chat.module';
import { AdivinarColorComponent } from './adivinar-color/adivinar-color.component';
import { MayorMenorComponent } from './mayor-menor/mayor-menor.component';
import { PreguntadosComponent } from './preguntados/preguntados.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { ColoresComponent } from './colores/colores.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdivinarColorComponent,
    MayorMenorComponent,
    PreguntadosComponent,
    AhorcadoComponent,
    ColoresComponent,
    ResultadosComponent,
    EncuestaComponent,
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule,
    FormsModule,
    ChatModule,
    ReactiveFormsModule,
  ]
})
export class JuegosModule { }
