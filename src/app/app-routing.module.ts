import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { QuienSoyComponent } from './component/quien-soy/quien-soy.component';
import { ErrorComponent } from './component/error/error.component';
import { RegistroComponent } from './component/registro/registro.component';


const routes: Routes = [
  { 
    path:'',
    redirectTo: 'login',
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
    path:'**', 
    component: ErrorComponent 
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
