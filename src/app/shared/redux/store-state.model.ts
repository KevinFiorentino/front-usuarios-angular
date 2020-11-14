/* ======================================
             INIT STATE NGRX
====================================== */

import { Usuario } from '@shared/models/usuario.model';

// ESTADO e INICIALIZACIONES

export interface StoreStateUsuarios {
  storeUsuarios: Array<Usuario[]>;
}

export const initStoreStateUsuarios = () => {
  return {
    storeUsuarios: null
  };
};
