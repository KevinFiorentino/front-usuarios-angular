
/* ======================================
              REDUCERS NGRX
====================================== */

import { StoreStateUsuarios } from '../store-state.model';
import { StoreStateTypes, NuevoUsuarioAction, EliminarUsuarioAction, EditarUsuarioAction } from '../actions/actions-store-state.model';


export type UsuariosActions = NuevoUsuarioAction | EliminarUsuarioAction | EditarUsuarioAction;

// REDUCERS USUARIOS
export function reducerUsuarios(state: StoreStateUsuarios, action: UsuariosActions): StoreStateUsuarios {
  switch (action.type) {
    case StoreStateTypes.NUEVO_USUARIO: {
      return {
        ...state,
        storeUsuarios: [
          ...state.storeUsuarios,
          (action as NuevoUsuarioAction).usuario
        ]
      };
    }
    case StoreStateTypes.EDITAR_USUARIO: {
      console.log('EDIT');
      return {
        ...state,
      };
    }
    case StoreStateTypes.ELIMINAR_USUARIO: {
      return {
        ...state,
        storeUsuarios: [
          ...state.storeUsuarios.filter(user => user.id !== (action as EliminarUsuarioAction).usuario.id)
        ]
      };
    }
    default: {
      return state;
    }
  }
}
