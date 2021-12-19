import { ActionReducerMap } from "@ngrx/store";
import { AccountEffects } from "src/app/Account/store/account.effects";
import { BudgetEffects } from "src/app/Budget/store/budget.effects";
import { budgetReducer, BudgetState } from "src/app/Budget/store/budget.reducer";
import { accountReducer, AccountState } from "../../Account/store/account.reducer";

export interface AppState {
  account: AccountState;
  budget: BudgetState;
}

export const reducers: ActionReducerMap<AppState, any> = {
  account: accountReducer,
  budget: budgetReducer
}

export const effects = [AccountEffects, BudgetEffects];
