import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@shared/redux/config-store-state.model';
import { NuevoUsuarioAction } from '@shared/redux/actions/actions-store-state.model';
import { FormUserComponent } from '@usuarios/components/form-user/form-user.component';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  private storeSuscription$: Subscription;

  constructor(private store: Store<AppState>, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.storeSuscription$ = this.store.select(state => state.storeUsuarios)
      .subscribe(data => {
        this.dialog.closeAll();
      });
  }

  ngOnDestroy(): void {
    this.storeSuscription$.unsubscribe();
  }

  openDialog(): void {
    this.dialog.open(FormUserComponent);
  }


}
