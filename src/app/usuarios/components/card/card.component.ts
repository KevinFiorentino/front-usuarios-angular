import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from '@shared/models/usuario.model';

import { Store } from '@ngrx/store';
import { AppState } from '@shared/redux/config-store-state.model';
import { EliminarUsuarioAction } from '@shared/redux/actions/actions-store-state.model';
import { BackHttpClientService } from '@shared/services/back-http-client/back-http-client.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() usuario: Usuario;

  constructor(private store: Store<AppState>, private backHttpClientService: BackHttpClientService) { }

  public editarUsuario(): void {

  }

  public borrarUsuario(): void {
     this.backHttpClientService.deleteUser(this.usuario.id)
      .subscribe( user => {
        this.store.dispatch(new EliminarUsuarioAction(user));
      });
  }

}
