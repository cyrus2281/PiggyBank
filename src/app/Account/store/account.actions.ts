import { Action } from "@ngrx/store";
import { AccountModel } from "../account.model";

export const SIGN_IN_WITH_EMAIL_START = '[Account] Sign In With Email Start';
export const SIGN_IN_SUCCESS = '[Account] Sign In Success';
export const SIGN_IN_ERROR = '[Account] Sign In Error';

export const SIGN_UP_START = '[Account] Sign Up With Email Start';
export const SIGN_UP_ERROR = '[Account] Sign Up Error';

export class SignInWithEmail implements Action {
  readonly type = SIGN_IN_WITH_EMAIL_START;
  constructor(public payload: {email: string, password: string}){}
}

export class SignInSuccess implements Action {
  readonly type = SIGN_IN_SUCCESS;
  constructor(public payload: AccountModel){}
}

export class SignInError implements Action {
  readonly type = SIGN_IN_ERROR;
  constructor(public payload: Error){}
}


export class SignUp implements Action {
  readonly type = SIGN_UP_START;
  constructor(public payload: {displayName:string; email: string; password: string}){}
}

export class SignUpError implements Action {
  readonly type = SIGN_UP_ERROR;
  constructor(public payload: Error){}
}



export type AccountAction = SignInWithEmail | SignInSuccess | SignInError | SignUp | SignUpError;
