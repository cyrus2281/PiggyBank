import { TransactionTypeEnum } from "../enums/transaction-type.enum";
import { TransactionModel } from "./transaction.model";

export class Transaction {
  type!: TransactionTypeEnum;

  id!: string;
  title!: string;
  category!: string; // TODO create category model
  amount!: number;

  dateAdded!: Date;

  constructor(model?: TransactionModel) {
    if (model) {
      this.type = model.type;
      this.id = model.id;
      this.title = model.title;
      this.category = model.category;
      this.amount = model.amount;
      this.dateAdded = model.dateAdded;
    }
  }

  toModel(): TransactionModel {
    return {...this};
  }

  clone(): Transaction {
    const transaction = new Transaction();
    transaction.type = this.type;
    transaction.id = this.id;
    transaction.title = this.title;
    transaction.category = this.category;
    transaction.amount = this.amount;
    transaction.dateAdded = new Date(this.dateAdded);

    return transaction;
  }

  equals(other: Transaction): boolean {
    if (
      this.id !== other.id ||
      this.type !== other.type ||
      this.title !== other.title ||
      this.category !== other.category ||
      this.amount !== other.amount ||
      this.dateAdded.toJSON() !== other.dateAdded.toJSON()
    ) {
      return false;
    }

    return true;
  }
}
