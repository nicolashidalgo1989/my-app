/* Modulos */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; 

/* Componente Padre */
import { AppComponent } from './app.component';

/* Componentes Hijos */
import { NavbarComponent } from './components/app-comps/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component'; 

/* Servicios */
import { ServicioService } from './servicio.service';

import { AuthGuardService } from './guards/auth-guard.service';
import { CanActivateGuard } from './guards/can-activate.guard';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtModule } from "@auth0/angular-jwt"; 
 
export function tokenGetter() {
  return sessionStorage.getItem("token");
}
 
@NgModule({
  
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: [],
        blacklistedRoutes: []
      }
    })
  ],

  providers: [ 
    ServicioService,
    AuthGuardService,
    CanActivateGuard,
    JwtHelperService
   ],
  bootstrap: [ AppComponent ]

})

export class AppModule { }