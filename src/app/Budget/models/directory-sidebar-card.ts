import { Type } from "@angular/core";
import { SideBarItemModel } from "src/app/Common/models/side-bar-item.model";
import { DirectoryCardComponent } from "../components/directory-card/directory-card.component";

export class DirectorySidebarCard implements SideBarItemModel {
  type: Type<DirectoryCardComponent> = DirectoryCardComponent;


  constructor(
    public id: string,
    public label: string,
    public icon: string,
    public totalIncome: number,
    public totalExpense: number,
    ){}
}
