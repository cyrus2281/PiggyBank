import { Type } from "@angular/core";
import { SideBarItemModelInterface } from "src/app/Common/models/side-bar-item.model";
import { DirectoryCardComponent } from "../components/directory-card/directory-card.component";

export class DirectorySidebarCard implements SideBarItemModelInterface {
  type: Type<DirectoryCardComponent> = DirectoryCardComponent;
  label: string;

  constructor(label: string){
    this.label = label;
  }

}
