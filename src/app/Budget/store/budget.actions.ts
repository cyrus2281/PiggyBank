import { Action } from "@ngrx/store";
import { DirectoryModel } from "../models/directory.model";

export const CREATE_DIRECTORY = "[Budget] Create Directory"


export class CreateDirectory implements Action {
  readonly type = CREATE_DIRECTORY;
  constructor(public payload: DirectoryModel){}
}


export type BudgetAction = CreateDirectory ;
