import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserModel } from '../../../shared/models/UserModel';
import { LoginServiceService } from '../../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: UserModel;
  constructor(private service: LoginServiceService) {}

  userFormGroup: FormGroup = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  });
  onSubmit(): void {
    this.user = this.userFormGroup.value;
    this.service.userLogin(this.user);
  }

}
