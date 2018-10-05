import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

import { UserAuthModel } from '../../../shared/models/UserAuthModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() loginEvent: EventEmitter<UserAuthModel> = new EventEmitter<UserAuthModel>();

  userFormGroup: FormGroup = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  });
  onSubmit(): void {
    this.loginEvent.emit(this.userFormGroup.value);
  }
}
