import { Directory } from "../models/directory";
import { BudgetAction } from "./budget.actions";
import * as BudgetActions from './budget.actions'


export interface BudgetState {
  directories: Directory[];

}

const initialState: BudgetState = {
  directories: [],
}

export const BUDGET_STORE = 'budget';

export function budgetReducer(
  state: BudgetState = initialState,
  action: BudgetAction) {
    switch(action.type) {
      case BudgetActions.CREATE_DIRECTORY:
        const newDirectory = new Directory(action.payload);
        return {
          directories: [newDirectory, ...state.directories]
        }

      default:
        return state;
    }
}
