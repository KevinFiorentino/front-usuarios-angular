/* ======================================
             INIT STATE NGRX
====================================== */

import { Usuario } from '@shared/models/usuario.model';

// ESTADO e INICIALIZACIONES

export interface StoreStateUsuarios {
  storeUsuarios: Usuario[];
}

export const initStoreStateUsuarios = () => {
  return {
    storeUsuarios: []
  };
};
