import { Observable } from "rxjs";
import { SideBarActionEventEnum } from "../enum/side-bar-action-event.enum";
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
  selectSidebarItem(item: T, action: SideBarActionEventEnum): void;

  /**
   * An observable which updates when the selected sidebar item changes
   */
  getSelectedSidebarItem(): Observable<T>;
}
