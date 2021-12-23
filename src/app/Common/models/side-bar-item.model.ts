import { Type } from "@angular/core";
import { SideBarItemComponent } from "../components/side-bar-item/side-bar-item.component";

export interface SideBarItemModel {
  type: Type<SideBarItemComponent<any>>;
}
