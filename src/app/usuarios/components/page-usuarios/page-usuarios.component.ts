import { Component, OnInit, OnDestroy } from '@angular/core';
import { Usuario } from '@shared/models/usuario.model';

import { BackHttpClientService } from '@shared/services/back-http-client/back-http-client.service';
import { Store } from '@ngrx/store';
import { AppState } from '@shared/redux/config-store-state.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-page-usuarios',
  templateUrl: './page-usuarios.component.html',
  styleUrls: ['./page-usuarios.component.scss']
})
export class PageUsuariosComponent implements OnInit, OnDestroy {

  public usuarios: Usuario[];
  private storeSuscription$: Subscription;


  constructor(private store: Store<AppState>, private backHttpClientService: BackHttpClientService) {
    this.usuarios = new Array();
  }


  ngOnInit(): void {
    this.storeSuscription$ = this.store.select(state => state.storeUsuarios)
      .subscribe(data => {
        this.usuarios = data.storeUsuarios;
      });
  }

  ngOnDestroy(): void {
    this.storeSuscription$.unsubscribe();
  }

}
