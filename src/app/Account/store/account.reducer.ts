import { Action } from "@ngrx/store";
import * as AccountActions from './account.actions';
const initialState = {
  email: "cyrus",
}

export function accountReducer(state = initialState, action: AccountActions.AccountAction) {
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
