/* ======================================
              ACTIONS NGRX
====================================== */

import { Action } from '@ngrx/store';
import { Usuario } from '@shared/models/usuario.model';

// Diferentes tipos de acciones que ocurren en la app
export enum StoreStateTypes {
  LOAD_USUARIOS = '[Usuario] Load usuarios',
  NUEVO_USUARIO = '[Usuario] Nuevo usuario',
  EDITAR_USUARIO = '[Usuario] Editar usuario',
  ELIMINAR_USUARIO = '[Usuario] Eliminar usuario'
}

// ACCIONES USUARIOS
export class NuevoUsuarioAction implements Action {
  type = StoreStateTypes.NUEVO_USUARIO;
  constructor(public usuario: Usuario) { }
}
export class EditarUsuarioAction implements Action {
  type = StoreStateTypes.EDITAR_USUARIO;
  constructor(public usuario: Usuario) { }
}
export class EliminarUsuarioAction implements Action {
  type = StoreStateTypes.ELIMINAR_USUARIO;
  constructor(public usuario: Usuario) { }
}
