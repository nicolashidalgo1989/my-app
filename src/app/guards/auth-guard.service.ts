import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ';

  constructor( private jwtHelper: JwtHelperService ) { }

  /* primer paso: verificar token existente */

  tokenExists(): Promise<any> {

    const token = sessionStorage.getItem('token');
    return new Promise((resolve, reject) => {
      if (this.token == null) reject(false);
      if (this.token != null) resolve({ state: true, message: this.token });
    });

  }

  /* segundo paso: verificar token valido (jwt o sin expirar) */
  async isAuthenticated(): Promise<boolean> {

    let isValid: boolean;

    await this.tokenExists().then(

      (res) => {
        console.log('TOKEN EXISTS: ' + res.state);
        isValid = !this.jwtHelper.isTokenExpired(res.message);
      },

      (err) => {
        console.log('TOKEN NOT EXISTS: ' + err);
        isValid = err;
      }

    );

    return isValid;

  }
}
