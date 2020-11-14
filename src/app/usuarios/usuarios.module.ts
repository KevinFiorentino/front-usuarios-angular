import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@material/material.module';

import { PageUsuariosComponent } from './components/page-usuarios/page-usuarios.component';
import { CardComponent } from './components/card/card.component';
import { FormUserComponent } from './components/form-user/form-user.component';


@NgModule({
  declarations: [
    PageUsuariosComponent,
    CardComponent,
    FormUserComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class UsuariosModule { }
