import { DirectoryModel } from "./directory.model";

export class Directory {
  name: string;
  creationDate: Date;

  constructor(model: DirectoryModel) {
    this.name = model.name;
    this.creationDate = model.creationDate;
  }

}
