import { Action } from "@ngrx/store";

export const ADD_EMAIL = '[Account] Add Email';

export class AddEmail implements Action {
  readonly type = ADD_EMAIL;
  constructor(public payload: string){}
}



export type AccountAction = AddEmail;
