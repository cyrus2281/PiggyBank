import { Observable } from "rxjs";
import { SideBarItemModelInterface } from "./side-bar-item.model";

export interface SideBarServiceInterface<T extends SideBarItemModelInterface>{
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
