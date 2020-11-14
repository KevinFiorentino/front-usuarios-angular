import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators  } from '@angular/forms';
import { BackHttpClientService } from '@shared/services/back-http-client.service';


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

  constructor(private fb: FormBuilder, private backHttpClientService: BackHttpClientService) { }

  ngOnInit(): void { }

  addUser(): void {
    this.backHttpClientService.postUser(this.formUser.value)
      .subscribe( newUser => {
        console.log(newUser);
      });
  }

}
