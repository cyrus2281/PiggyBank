import { Directory } from "../models/directory";
import { BudgetAction } from "./budget.actions";
import * as BudgetActions from './budget.actions'
import { testDirectoryValues } from "./dummy-test-data";


export interface BudgetState {
  directories: Directory[];

}

const initialState: BudgetState = {
  directories: testDirectoryValues,
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
