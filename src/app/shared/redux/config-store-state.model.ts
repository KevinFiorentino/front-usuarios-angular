/* ======================================
              CONFIG NGRX
====================================== */

import { ActionReducerMap } from '@ngrx/store';
import { StoreStateUsuarios, initStoreStateUsuarios } from '@shared/redux/store-state.model';
import { reducerUsuarios } from '@shared/redux/reducers/reducers-store-state.model';

export interface AppState {
  storeUsuarios: StoreStateUsuarios;
}

export const reducers: ActionReducerMap<AppState> = {
  storeUsuarios: reducerUsuarios,
};

export const reducersInitialState = {
  storeUsuarios: initStoreStateUsuarios(),
};
