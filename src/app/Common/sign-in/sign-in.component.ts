import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ButtonStyleEnum } from 'src/app/Core/enum/button-style.enum';
import { AppState } from 'src/app/Data/Redux/root.reducer';
import * as AccountActions from 'src/app/Account/store/account.actions';

@Component({
  selector: 'pg-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  buttonStyle =  ButtonStyleEnum;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('account').subscribe();
  }

  email(email:string){
    this.store.dispatch(new AccountActions.AddEmail(email));
  }

}
