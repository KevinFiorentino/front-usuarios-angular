
/* ======================================
              REDUCERS NGRX
====================================== */

import { StoreStateUsuarios } from '../store-state.model';
import { StoreStateTypes, LoadUsuariosAction, NuevoUsuarioAction, EliminarUsuarioAction, EditarUsuarioAction } from '../actions/actions-store-state.model';


export type UsuariosActions = LoadUsuariosAction | NuevoUsuarioAction | EliminarUsuarioAction | EditarUsuarioAction;

// REDUCERS USUARIOS
export function reducerUsuarios(state: StoreStateUsuarios, action: UsuariosActions): StoreStateUsuarios {
  switch (action.type) {
    case StoreStateTypes.LOAD_USUARIOS: {
      return {
        ...state,
        storeUsuarios: [
          ...state.storeUsuarios,
          (action as LoadUsuariosAction).usuarios
        ]
      };
    }
/*     case StoreStateTypes.NUEVO_USUARIO: {
        console.log('NUEVO')
        return {
          ...state,
        };
    }
    case StoreStateTypes.EDITAR_USUARIO: {
        console.log('EDIT')
        return {
          ...state,
        };
    }
    case StoreStateTypes.ELIMINAR_USUARIO: {
        console.log('DELETE')
        return {
          ...state,
        };
    } */
    default: {
      return state;
    }
  }
}
