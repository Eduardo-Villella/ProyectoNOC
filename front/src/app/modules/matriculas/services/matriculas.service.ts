import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Matricula } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatriculasService {

  private baseUrl: string = environment.API_URL;

  constructor( private http: HttpClient ) { }

  addMatricula( matricula: Matricula): Observable<Matricula> {
    console.log('addmatricula :', this.http.post<Matricula>(`${ this.baseUrl }matricula`, matricula))
    return this.http.post<Matricula>(`${ this.baseUrl }matricula`, matricula)
  }
  

}
