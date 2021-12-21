import { TransactionTypeEnum } from "../enums/transaction-type.enum";

export interface TransactionModel {
  type: TransactionTypeEnum;

  id: string;
  title: string;
  category: string; // TODO create category model
  amount: number;

  dateAdded: Date;

}
