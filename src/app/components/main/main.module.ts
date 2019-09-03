/* Modulos */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';

/* Componente Padre */
import { MainComponent } from './main.component';

/* Componentes Hijos */
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    MainComponent, 
    HomeComponent, 
    ProfileComponent, SidebarComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
