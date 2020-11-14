import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from '@shared/models/usuario.model';

import { BackHttpClientService } from '@shared/services/back-http-client/back-http-client.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() usuario: Usuario;
  @Output() idUserDelete = new EventEmitter<string>();

  constructor(private backHttpClientService: BackHttpClientService) { }

  public editarUsuario(): void {

  }

  public borrarUsuario(): void {
    this.backHttpClientService.deleteUser(this.usuario.id)
      .subscribe( user => {
        this.idUserDelete.emit(user.id);
      });
  }

}
