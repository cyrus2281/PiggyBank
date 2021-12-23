import { DirectoryModel } from "./directory.model";
import { Transaction } from "./transaction";

export class Directory {
  id!: string;
  name!: string;
  icon!: string;

  creationDate!: Date;
  modifiedDate!: Date;

  transactions!: Transaction[];
  subDirectories?: Directory[];

  constructor(model?: DirectoryModel) {
    if (model) {
      this.id = model.id;
      this.name = model.name;
      this.icon = model.icon;
      this.creationDate = model.creationDate;
      this.modifiedDate = model.modifiedDate;

      if (model.transactions?.length > 0) {
        this.transactions = model.transactions.map(transactionModel => new Transaction(transactionModel));
      }

      if (model?.subDirectories && model.subDirectories?.length > 0) {
        this.subDirectories = model.subDirectories.map(directoryModel => new Directory(directoryModel));
      }

    }
  }

  toModel(): DirectoryModel {
    return {
      ...this,
      transactions: this.transactions.map(transaction => transaction.toModel()),
      subDirectories: this.subDirectories?.map(subDirectory => subDirectory.toModel())
    }
  }

  clone(): Directory {
    const directory = new Directory();
    directory.id = this.id;
    directory.name = this.name;
    directory.icon = this.icon;
    directory.creationDate = new Date(this.creationDate);
    directory.modifiedDate = new Date(this.modifiedDate);
    directory.transactions = this.transactions.map(transaction => transaction.clone());
    directory.subDirectories = this.subDirectories?.map(subDirectory => subDirectory.clone());
    return directory;
  }

  /**
   * compare two directories, if same returns true
   * @param other the other directory to be compared with
   * @param ignoreModifiedDate if set true, modified date will not be considered
   * @returns true if equal, false if not
   */
  equals(other: Directory, ignoreModifiedDate = false): boolean {
    if (
      this.id !== other.id ||
      this.name !== other.name ||
      this.icon !== other.icon ||
      this.creationDate.toJSON() !== other.creationDate.toJSON()
    ) {
      return false
    }

    if (!ignoreModifiedDate && this.modifiedDate.toJSON() !== other.modifiedDate.toJSON()) {
      return false
    }

    if (this.transactions.length !== other.transactions.length ||
      this.subDirectories?.length !== other.subDirectories?.length) {
      return false
    }

    for (let i = 0; i < this.transactions.length; i++) {
      if (!this.transactions[i].equals(other.transactions[i])) {
        return false;
      }
    }

    if (this.subDirectories && other.subDirectories) {
      for (let i = 0; i < this.subDirectories?.length; i++) {
        if (!this.subDirectories[i].equals(other.subDirectories[i], ignoreModifiedDate)) {
          return false;
        }
      }
    }

    return true;
  }

}
