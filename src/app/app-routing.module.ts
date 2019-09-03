import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateGuard } from './guards/can-activate.guard';
//Componentes a asignar ruta
import { WelcomeComponent } from './components/welcome/welcome.component';

//Arrays de Rutas para este modulo
const routes: Routes = [

  { path: 'welcome', component: WelcomeComponent }, //Ruta a componente
  { path: 'main', loadChildren: '../app/components/main/main.module#MainModule', canActivate: [CanActivateGuard] }, //Ruta a modulo principal
  { path: '**', redirectTo: 'welcome' } //redireccion

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
