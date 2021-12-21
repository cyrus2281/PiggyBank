import { TransactionModel } from "./transaction.model";

export interface DirectoryModel {
  id: string;
  name: string;
  icon: string;

  creationDate: Date;
  modifiedDate: Date;

  transactions: TransactionModel[];
  subDirectories?: DirectoryModel[];
}
