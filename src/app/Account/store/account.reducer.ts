import { Action } from "@ngrx/store";
import { AccountModel } from "../account.model";
import * as AccountActions from './account.actions';

export interface AccountState {
  account: AccountModel
}

const initialState: AccountState = {
  account: new AccountModel()
}

export function accountReducer(
  state: AccountState = initialState,
  action: AccountActions.AccountAction)
  {

  switch (action.type) {
    case AccountActions.ADD_EMAIL:
      return {
        ...state,
        email: action.payload
      }
    default:
      return state;
  }
}
