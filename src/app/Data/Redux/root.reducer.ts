import { ActionReducerMap } from "@ngrx/store";
import { accountReducer } from "../..//Account/store/account.reducer";

export interface AppState {
  account: any;
}

export const reducers: ActionReducerMap<AppState, any> = {
  account: accountReducer,
}
