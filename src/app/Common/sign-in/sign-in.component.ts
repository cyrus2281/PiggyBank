import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ButtonStyleEnum } from 'src/app/Core/enum/button-style.enum';
import { AppState } from 'src/app/Data/Redux/root.reducer';
import * as AccountActions from 'src/app/Account/store/account.actions';
import { SignInMethodsEnum } from 'src/app/Core/enum/sign-in-methods.enum';
import { AccountService } from 'src/app/Account/account.service';

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

  constructor(public accountService: AccountService) { }

  ngOnInit(): void {}

  signIn() {
    console.log(this.email, this.password);
    this.accountService.signInWithEmailAndPassword(this.email, this.password);
  }

}
