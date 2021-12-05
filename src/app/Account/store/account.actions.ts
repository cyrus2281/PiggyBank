import { Action } from "@ngrx/store";
import { AccountModel } from "../account.model";

export const SIGN_IN_WITH_EMAIL_START = '[Account] Sign In With Email Start';
export const SIGN_IN_WITH_EMAIL_SUCCESS = '[Account] Sign In With Email Success';
export const SIGN_IN_WITH_EMAIL_ERROR = '[Account] Sign In With Email Error';

export class SignInWithEmail implements Action {
  readonly type = SIGN_IN_WITH_EMAIL_START;
  constructor(public payload: {email: string, password: string}){}
}

export class SignInWithEmailSuccess implements Action {
  readonly type = SIGN_IN_WITH_EMAIL_SUCCESS;
  constructor(public payload: AccountModel){}
}

export class SignInWithEmailError implements Action {
  readonly type = SIGN_IN_WITH_EMAIL_ERROR;
  constructor(public payload: Error){}
}



export type AccountAction = SignInWithEmail | SignInWithEmailSuccess | SignInWithEmailError;
