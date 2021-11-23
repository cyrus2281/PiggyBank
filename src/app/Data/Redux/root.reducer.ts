import { ActionReducerMap } from "@ngrx/store";
import { AccountEffects } from "src/app/Account/store/account.effects";
import { accountReducer, AccountState } from "../..//Account/store/account.reducer";

export interface AppState {
  account: AccountState;
}

export const reducers: ActionReducerMap<AppState, any> = {
  account: accountReducer,
}

export const effects = [AccountEffects];
