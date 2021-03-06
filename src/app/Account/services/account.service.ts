import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from '../../Data/Redux/root.reducer';
import { AccountState, ACCOUNT_STORE } from '../store/account.reducer';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private store: Store<AppState>) {}

  public validateEmail(email: string): boolean {
    // TODO: add email validation
    return true;
  }

  getAccount(): Observable<AccountState> {
    return this.store.select(ACCOUNT_STORE);
  }

  getEmail(): Observable<string | undefined> {
    return this.store.select(ACCOUNT_STORE).pipe(map(store => store.account?.email));
  }

  getDisplayName(): Observable<string | undefined> {
    return this.store.select(ACCOUNT_STORE).pipe(map(store => store.account?.displayName));
  }
}
