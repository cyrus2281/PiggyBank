import { Action } from "@ngrx/store";
import { AccountModel } from "../account.model";

export const SIGN_IN_WITH_EMAIL_START = '[Account] Sign In With Email Start';
export const SIGN_IN_SUCCESS = '[Account] Sign In Success';

export const SIGN_UP_START = '[Account] Sign Up';

export const SIGN_OUT_START = '[Account] Sign Out Start';
export const SIGN_OUT_SUCCESS = '[Account] Sign Out Success';

export const SHOW_ERROR = '[Account] Show Error';
export const CLEAR_ERROR = '[Account] Clear Error';

export class SignInWithEmail implements Action {
  readonly type = SIGN_IN_WITH_EMAIL_START;
  constructor(public payload: {email: string, password: string}){}
}

export class SignInSuccess implements Action {
  readonly type = SIGN_IN_SUCCESS;
  constructor(public payload: AccountModel){}
}
export class SignUp implements Action {
  readonly type = SIGN_UP_START;
  constructor(public payload: {displayName:string; email: string; password: string}){}
}

export class SignOut implements Action {
  readonly type = SIGN_OUT_START;
  constructor(){}
}

export class SignOutSuccess implements Action {
  readonly type = SIGN_OUT_SUCCESS;
  constructor(){}
}

export class ShowError implements Action {
  readonly type = SHOW_ERROR;
  constructor(public payload: string){}
}

export class ClearError implements Action {
  readonly type = CLEAR_ERROR;
  constructor(){}
}

export type AccountAction =
  SignInWithEmail | SignUp | SignOut |
  SignInSuccess | SignOutSuccess |
  ShowError | ClearError;
