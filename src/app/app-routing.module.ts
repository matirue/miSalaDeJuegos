import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { QuienSoyComponent } from './component/quien-soy/quien-soy.component';
import { ErrorComponent } from './component/error/error.component';
import { RegistroComponent } from './component/registro/registro.component';
import { AhorcadoComponent } from './juegos/ahorcado/ahorcado.component';
import { AdivinarColorComponent } from './juegos/adivinar-color/adivinar-color.component';
import { MayorMenorComponent } from './juegos/mayor-menor/mayor-menor.component';
import { PreguntadosComponent } from './juegos/preguntados/preguntados.component';


const routes: Routes = [
  { 
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { 
    path:'home', 
    component: HomeComponent 
  },
  { 
    path:'login', 
    component: LoginComponent 
  },
  { 
    path:'quienSoy', 
    component: QuienSoyComponent 
  },
  { 
    path:'registro', 
    component: RegistroComponent 
  },
  { 
    path:'ahorcado', 
    component: AhorcadoComponent 
  },
  { 
    path:'adivinarColor', 
    component: AdivinarColorComponent 
  },
  { 
    path:'mayorMenor', 
    component: MayorMenorComponent 
  },
  { 
    path:'preguntados', 
    component: PreguntadosComponent 
  },
  {
    path:'**', 
    component: ErrorComponent 
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
