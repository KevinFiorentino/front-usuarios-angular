/* ======================================
             INIT STATE NGRX
====================================== */

// ESTADO e INICIALIZACIONES

export interface StoreStateUsuarios {
  storeUsuarios: string;
}

export const initStoreStateUsuarios = () => {
  return {
    storeUsuarios: null
  };
};
