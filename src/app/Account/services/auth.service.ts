import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/Data/Redux/root.reducer';
import { SubSink } from 'subsink';
import { SignInMethodsEnum } from '../enum/sign-in-methods.enum';
import { ACCOUNT_STORE } from '../store/account.reducer';
import * as AccountActions from '../store/account.actions';
import { RouterService } from 'src/app/Core/routing/router.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private subscriptions = new SubSink();
  private _isLoggedIn: boolean = !false;

  constructor(private store: Store<AppState>, private routerService: RouterService) {
    this.subscriptions.add(this.store.select(ACCOUNT_STORE).subscribe(accountStore => {
      if (this._isLoggedIn !== accountStore.account.isLoggedIn) {
        this._isLoggedIn = accountStore.account.isLoggedIn
        if (this._isLoggedIn) {
          this.routerService.goToApp();
        } else {
          this.routerService.goToLogin();
        }
      }
    }));
  }


  public get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  public signInWithEmail(email: string, password: string) {
    this.store.dispatch(new AccountActions.SignInWithEmail({ email, password }))

  }

  public signInWith(method: SignInMethodsEnum) {

  }

  public signOut() {

  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
