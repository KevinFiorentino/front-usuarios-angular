import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@shared/redux/config-store-state.model';
import { NuevoUsuarioAction } from '@shared/redux/actions/actions-store-state.model';
import { BackHttpClientService } from '@shared/services/back-http-client/back-http-client.service';


@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {

  public formUser = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    lastname: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
  });


  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private backHttpClientService: BackHttpClientService) { }

  ngOnInit(): void { }


  addUser(): void {
    this.backHttpClientService.postUser(this.formUser.value)
      .subscribe( newUser => {
        this.store.dispatch(new NuevoUsuarioAction(newUser));
      });
  }

  public getFieldName(): AbstractControl {
    return this.formUser.get('name');
  }
  public getFieldLastname(): AbstractControl {
    return this.formUser.get('lastname');
  }
  public getFieldEmail(): AbstractControl {
    return this.formUser.get('email');
  }

}
