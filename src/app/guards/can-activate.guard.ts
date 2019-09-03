import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {

  constructor(private auth: AuthGuardService, private router: Router) { }

  /* tercer paso: devolver respuesta de si es valido o no el acceso a la ruta */
  async canActivate() {
    let isValid: boolean;

    await this.auth.isAuthenticated().then(
      res => {
        isValid = res;
      },
      err => {
        isValid = false;
      }
    );

    console.log('canActive'); console.log(isValid);
    return isValid;
  }
}
