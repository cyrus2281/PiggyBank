import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ButtonStyleEnum } from '../../Core/enum/button-style.enum';
import { AppState } from '../../Data/Redux/root.reducer';
import * as AccountActions from '../../Account/store/account.actions';
import { SignInMethodsEnum } from '../../Account/enum/sign-in-methods.enum';
import { AccountService } from '../../Account/services/account.service';
import { AuthService } from '../../Account/services/auth.service';


@Component({
  selector: 'pg-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  buttonStyle = ButtonStyleEnum;
  signInMethods = SignInMethodsEnum;
  email!: string;
  password!: string;

  constructor(public accountService: AccountService, public authService: AuthService) { }

  ngOnInit(): void {}

  signIn() {
    console.log(this.email, this.password);
    this.authService.signInWithEmail(this.email, this.password);
  }

}
