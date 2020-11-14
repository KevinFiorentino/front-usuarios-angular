import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { FormUserComponent } from '@shared/components/form-user/form-user.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    this.dialog.open(FormUserComponent);
  }

}
