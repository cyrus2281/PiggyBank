import { Component, OnInit } from '@angular/core';
import { ButtonStyleEnum } from '../../Core/enum/button-style.enum';
import { SignInMethodsEnum } from '../../Account/enum/sign-in-methods.enum';
import { AuthService } from '../../Account/services/auth.service';
import { emailValidator } from 'src/app/Core/utilities/validate.utils';

@Component({
  selector: 'pg-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  emailValidator = emailValidator;
  buttonStyle = ButtonStyleEnum;
  signInMethods = SignInMethodsEnum;
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
