import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SignInMethodsEnum } from '../Core/enum/sign-in-methods.enum';
import { AppState } from '../Data/Redux/root.reducer';
import { AccountState } from './store/account.reducer';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private store: Store<AppState>) {
    // this.store.select('account').subscribe();
    // this.store.dispatch(new AccountActions.AddEmail(email));

  }

  public validateEmail(email: string): boolean {
    // TODO: add email validation
    return true;
  }

  public signInWithEmail(email: string, password: string) {

  }

  public signInWith(method: SignInMethodsEnum) {

  }

  public signOut() {

  }

  getAccount(): Observable<AccountState> {
    return this.store.select('account');
  }
}