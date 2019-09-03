import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

const mainRoutes:Routes = [
  { path: '', component: MainComponent, children: [
      
    { path: 'home', component: HomeComponent }, // admin
    { path: 'profile', component: ProfileComponent }, // user normal 
    { path: '**', redirectTo: 'home' }
    
  ] },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(mainRoutes)
  ],
  exports: [ RouterModule ]
})

export class MainRoutingModule { }