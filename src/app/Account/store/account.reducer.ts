import { AccountModel } from "../account.model";
import * as AccountActions from './account.actions';

export interface AccountState {
  account: AccountModel | null;
  error: string | null;
}

const initialState: AccountState = {
  account: null,
  error: null
}

export const ACCOUNT_STORE = 'account';

export function accountReducer(
  state: AccountState = initialState,
  action: AccountActions.AccountAction) {

  switch (action.type) {
    case AccountActions.SIGN_IN_SUCCESS:
      return {
        ...state,
        account: action.payload,
        error: null
      }

    case AccountActions.SIGN_OUT_SUCCESS:
      return {
        ...state,
        account: null,
        error: null
      }

    case AccountActions.SHOW_ERROR:
      return {
        ...state,
        error: action.payload
      }

    case AccountActions.CLEAR_ERROR:
      return {
        ...state,
        error: null
      }

    default:
      return state;
  }
}
