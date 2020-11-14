import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Usuario } from '@shared/models/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class BackHttpClientService {

  constructor(private http: HttpClient) { }


  // Funciona para manejar los errores en la API
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('Error del cliente: ', error.error.message)
    }
    else {
      console.log('Error del servidor:', error.status, error.message)
    }
    return throwError('Error en la comunicación HTTP')
  }


  getAllUser(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('https://5faf25e663e40a0016d8a580.mockapi.io/usuario')
      .pipe(
        catchError(this.handleError)
      );
  }

  getUser(id: string): Observable<Usuario> {
    return this.http.get<Usuario>('')
      .pipe(
        catchError(this.handleError)
      );
  }

  postUser(): Observable<Usuario> {
    return this.http.post<Usuario>('', {})
      .pipe(
        catchError(this.handleError)
      );
  }

  putUser(): Observable<Usuario> {
    return this.http.put<Usuario>('', {})
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteUser(id: string): Observable<Usuario> {
    return this.http.delete<Usuario>(`https://5faf25e663e40a0016d8a580.mockapi.io/usuario/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

}
