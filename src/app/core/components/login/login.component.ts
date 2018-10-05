import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserAuthModel } from '../../../shared/models/UserAuthModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() loginEvent: EventEmitter<UserAuthModel> = new EventEmitter<UserAuthModel>();
  user: UserAuthModel;

  userFormGroup: FormGroup = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  });
  onSubmit(): void {
    this.user = this.userFormGroup.value;
    this.loginEvent.emit(this.user);
  }
}
