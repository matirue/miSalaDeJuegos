import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardsService implements CanActivate{

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  
    //Checkea si ya existe un logueo, caso contrario lo retorna al login
    canActivate(
      next: ActivatedRouteSnapshot, //recorre la ruta y obtiene la info
      state: RouterStateSnapshot  //me da el estado de la ruta
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    {
      return this.afAuth.authState.pipe(map( aux => {
          if(aux === null || aux === undefined)
          {
            this.router.navigate(['/login']);
            return false;
          }
          else
          {
            return true;
          }
      }))
    }
}
