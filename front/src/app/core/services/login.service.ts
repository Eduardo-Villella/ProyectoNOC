import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class LoginService {
  private baseUrl = 'http://localhost:4001/login/';

  constructor(private http: HttpClient) {}

 login(credencials:any){
  console.log(credencials);
 }
}


