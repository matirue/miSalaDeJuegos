import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { QuienSoyComponent } from './component/quien-soy/quien-soy.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { ErrorComponent } from './component/error/error.component';
import { RegistroComponent } from './component/registro/registro.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { AhorcadoComponent } from './juegos/ahorcado/ahorcado.component';
import { PreguntadosComponent } from './juegos/preguntados/preguntados.component';
import { AdivinarColorComponent } from './juegos/adivinar-color/adivinar-color.component';
import { MayorMenorComponent } from './juegos/mayor-menor/mayor-menor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    QuienSoyComponent,
    NavBarComponent,
    ErrorComponent,
    RegistroComponent,
    AhorcadoComponent,
    PreguntadosComponent,
    AdivinarColorComponent,
    MayorMenorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), //conec. firebase
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
