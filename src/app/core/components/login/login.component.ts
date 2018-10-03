import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserModel } from '../../../shared/models/UserModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() loginEvent: EventEmitter<UserModel> = new EventEmitter<UserModel>();
  user: UserModel;

  userFormGroup: FormGroup = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  });
  onSubmit(): void {
    this.user = this.userFormGroup.value;
    this.loginEvent.emit(this.user);
  }
}
