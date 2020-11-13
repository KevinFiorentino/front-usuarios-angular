import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageUsuariosComponent } from './components/page-usuarios/page-usuarios.component';

const routes: Routes = [{
  path: '',
  component: PageUsuariosComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
