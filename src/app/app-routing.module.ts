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
import { AuthGuardsService } from './guards/auth-guards.service';


const routes: Routes = [
  { 
    path:'',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { 
    path:'home', 
    component: HomeComponent,
    canActivate: [AuthGuardsService]
  },
  { 
    path:'login', 
    component: LoginComponent,
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
    path:'juegos/ahorcado', 
    component: AhorcadoComponent,
    canActivate: [AuthGuardsService],
    children: [] 
  },
  { 
    path:'juegos/adivinarColor', 
    component: AdivinarColorComponent,
    canActivate: [AuthGuardsService],
    children: [] 
  },
  { 
    path:'juegos/mayorMenor', 
    component: MayorMenorComponent,
    canActivate: [AuthGuardsService],
    children: [] 
  },
  { 
    path:'juegos/preguntados', 
    component: PreguntadosComponent,
    canActivate: [AuthGuardsService],
    children: [] 
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
