import { Injectable } from '@angular/core';
import { SignInMethodsEnum } from '../enum/sign-in-methods.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn: boolean = false;

  constructor() { }


  public get isLoggedIn(): boolean{
      return this._isLoggedIn;
  }

  public signInWithEmail(email: string, password: string) {

  }

  public signInWith(method: SignInMethodsEnum) {

  }

  public signOut() {

  }
}
