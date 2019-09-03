import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../.././../servicio.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private service: ServicioService ) { }
 
  datos: any = [];
 
  ngOnInit() {
 
    this.service.getMyGitHub().toPromise().then( data => { this.datos = data; console.log(data); } );

  } 

}
