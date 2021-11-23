import { Action } from "@ngrx/store";

export const ADD_EMAIL = '[Account] Add Email';
export const SIGN_IN_WITH_EMAIL = '[Account] Sign In With Email';

export class AddEmail implements Action {
  readonly type = ADD_EMAIL;
  constructor(public payload: string){}
}

export class SignInWithEmail implements Action {
  readonly type = SIGN_IN_WITH_EMAIL;
  constructor(public payload: {email: string, password: string}){}
}



export type AccountAction = AddEmail;
