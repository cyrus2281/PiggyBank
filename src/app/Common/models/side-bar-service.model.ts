import { Observable } from "rxjs";
import { SideBarItemModel } from "./side-bar-item.model";

export interface SideBarServiceModel<T extends SideBarItemModel>{
  /**
   * returns items models based on the current module
   */
  getSidebarItems(): Observable<T[]>;

  /**
   * sets the selected item from the sidebar
   * @param item selected item
   */
  selectSidebarItem(item: T): void;
}