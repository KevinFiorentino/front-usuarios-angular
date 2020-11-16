import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { Usuario } from '@shared/models/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class BackHttpClientService {

  constructor(private http: HttpClient) { }


  private getHttpHeaders() {
    return {
      headers: new HttpHeaders({
        'content-type': 'application/json'
      })
    };
  }

  // Funciona para manejar los errores en la API
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('Error del cliente: ', error.error.message)
    }
    else {
      console.log('Error del servidor:', error.status, error.message)
    }
    return throwError('Error en la comunicación HTTP');
  }


  getAllUser(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${environment.url_api_back}/users`, this.getHttpHeaders())
      .pipe(
        catchError(this.handleError)
      );
  }

  getUser(id: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${environment.url_api_back}/users/${id}`, this.getHttpHeaders())
      .pipe(
        catchError(this.handleError)
      );
  }

  postUser(user: Partial<Usuario>): Observable<Usuario> {
    return this.http.post<Usuario>(`${environment.url_api_back}/users`, user, this.getHttpHeaders())
      .pipe(
        catchError(this.handleError)
      );
  }

  putUser(user: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${environment.url_api_back}/users/${user.id}`, user, this.getHttpHeaders())
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteUser(id: string): Observable<Usuario> {
    return this.http.delete<Usuario>(`${environment.url_api_back}/users/${id}`, this.getHttpHeaders())
      .pipe(
        catchError(this.handleError)
      );
  }

}
