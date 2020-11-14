import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@material/material.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FormUserComponent } from './components/form-user/form-user.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FormUserComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
