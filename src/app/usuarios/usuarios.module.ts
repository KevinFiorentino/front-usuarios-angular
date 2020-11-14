import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosRoutingModule } from './usuarios-routing.module';

import { MaterialModule } from '@material/material.module';

import { PageUsuariosComponent } from './components/page-usuarios/page-usuarios.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    PageUsuariosComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    MaterialModule
  ]
})
export class UsuariosModule { }
