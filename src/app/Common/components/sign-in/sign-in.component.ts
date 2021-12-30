import { emailValidator } from 'src/app/Core/utilities/validate.utils';
import { ButtonStyleEnum } from 'src/app/Components/enum/button-style.enum';
import { Component, OnInit } from '@angular/core';
import { SignInMethodsEnum } from 'src/app/Account/enum/sign-in-methods.enum';
import { AuthService } from 'src/app/Account/services/auth.service';
import { IconSizeEnum } from 'src/app/Components/icon/icons/icon.enum';
import * as Routes from 'src/app/Core/routes/app-routes';

@Component({
  selector: 'pg-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  emailValidator = emailValidator;
  buttonStyle = ButtonStyleEnum;
  signInMethods = SignInMethodsEnum;
  largeIcon = IconSizeEnum.xlarge;
  routes = Routes;

  email!: string;
  password!: string;
  isValid = {
    email: false,
    password: false
  }

  constructor(public authService: AuthService) { }

  ngOnInit(): void {}

  signIn() {
    this.authService.signInWithEmail(this.email, this.password);
  }
}
