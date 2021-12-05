import { Action } from "@ngrx/store";
import { AccountModel } from "../account.model";
import * as AccountActions from './account.actions';

export interface AccountState {
  account: AccountModel;
  error: Error | null;
}

const initialState: AccountState = {
  account: new AccountModel(),
  error: null
}

export const ACCOUNT_STORE = 'account';

export function accountReducer(
  state: AccountState = initialState,
  action: AccountActions.AccountAction) {

  switch (action.type) {
    case AccountActions.SIGN_IN_WITH_EMAIL_SUCCESS:
      return {
        ...state,
        account: action.payload,
        error: null
      }

    case AccountActions.SIGN_IN_WITH_EMAIL_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}
