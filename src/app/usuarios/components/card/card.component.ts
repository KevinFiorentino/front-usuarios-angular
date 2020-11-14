import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Usuario } from '@shared/models/usuario.model';
import { FormUserComponent } from '@usuarios/components/form-user/form-user.component';

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

  constructor(
    private store: Store<AppState>,
    private backHttpClientService: BackHttpClientService,
    public dialog: MatDialog) { }

  public editarUsuario(): void {
    this.dialog.open(FormUserComponent, {
      data: this.usuario
    });
  }

  public borrarUsuario(): void {
    this.backHttpClientService.deleteUser(this.usuario.id)
      .subscribe( user => {
        this.store.dispatch(new EliminarUsuarioAction(user));
      });
  }

}
