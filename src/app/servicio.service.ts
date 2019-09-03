import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 

const myUser:string = 'nicolashidalgo1989';

@Injectable({
  providedIn: 'root'
})

export class ServicioService {

  constructor( private http: HttpClient ) { } 
  
  public getMyGitHub() {
    
    return this.http.get('https://api.github.com/users/' + myUser);

  }

} 