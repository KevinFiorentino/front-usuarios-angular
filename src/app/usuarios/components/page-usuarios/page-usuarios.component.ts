import { Component, OnInit } from '@angular/core';
import { Usuario } from '@shared/models/usuario.model';

import { BackHttpClientService } from '@shared/services/back-http-client/back-http-client.service';


@Component({
  selector: 'app-page-usuarios',
  templateUrl: './page-usuarios.component.html',
  styleUrls: ['./page-usuarios.component.scss']
})
export class PageUsuariosComponent implements OnInit {

  public usuarios: Usuario[];

  constructor(private backHttpClientService: BackHttpClientService) { }

  ngOnInit(): void {
    this.backHttpClientService.getAllUser()
      .subscribe( data => {
        this.usuarios = data;
      });
  }

  public borrarUsuarioArray(idUserDelete): void {
    this.usuarios = this.usuarios.filter(user => user.id !== idUserDelete);
  }

}
