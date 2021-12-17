import { Type } from "@angular/core";
import { SideBarItemComponent } from "src/app/Common/components/side-bar-item/side-bar-item.component";
import { SideBarItemModelInterface } from "src/app/Common/models/side-bar-item.model";
import { DirectoryCardComponent } from "../components/directory-card/directory-card.component";

export class DirectoryCardModel implements SideBarItemModelInterface {
  type: Type<DirectoryCardComponent> = DirectoryCardComponent;
  label: string;

  constructor(label: string){
    this.label = label;
  }

}
