import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Usuario } from '@shared/models/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class BackHttpClientService {

  constructor(private http: HttpClient) { }

  getAllUser(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>('https://5faf25e663e40a0016d8a580.mockapi.io/usuario');
  }

  getUser(): Observable<Usuario> {
    return this.http.get<Usuario>('');
  }

  postUser(): Observable<Usuario> {
    return this.http.post<Usuario>('', {});
  }

  putUser(): Observable<Usuario> {
    return this.http.put<Usuario>('', {});
  }

  deleteUser(): void {
    this.http.delete('');
  }

}
