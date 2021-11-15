import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SignInMethodsEnum } from '../Core/enum/sign-in-methods.enum';
import { AppState } from '../Data/Redux/root.reducer';

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

  public signInWithEmailAndPassword(email:string, password:string) {

  }

  public signInWith(method: SignInMethodsEnum){

  }

  public signOut(){

  }
}
