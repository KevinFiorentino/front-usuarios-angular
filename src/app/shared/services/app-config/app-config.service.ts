import { Injectable } from '@angular/core';
import { BackHttpClientService } from '../back-http-client/back-http-client.service';

import { Store } from '@ngrx/store';
import { NuevoUsuarioAction } from '@shared/redux/actions/actions-store-state.model';


@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  constructor(private store: Store, private backHttpClientService: BackHttpClientService) { }

  loadUsersRedux(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.backHttpClientService.getAllUser()
        .subscribe(usuarios => {
          usuarios.map(user => {
            this.store.dispatch(new NuevoUsuarioAction(user));
          });
          resolve('OK');
        })
    });
  }

}

// Función que se ejecuta antes que arranque el proyecto Angular
export function servicesOnRun(config: AppConfigService): () => void {
  return () => config.loadUsersRedux()
    .then(() => {
      console.log('END SERVICES ON RUN');
    });
}
