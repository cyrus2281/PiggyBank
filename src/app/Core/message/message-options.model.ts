import { Injector } from "@angular/core";
import { ToastPosition, ToastRole, ToastAriaLive, IconTheme, ToastTheme } from "@ngneat/hot-toast";
import { Content } from "@ngneat/overview";

/**
 * https://github.com/ngneat/hot-toast#toastoptions
 */
export interface MessageOptionModel {
  /**	Unique id to associate with hot-toast. There can't be multiple hot-toasts opened with same id. **/
  id?: string;
  /**	Duration in milliseconds after which hot-toast will be auto closed. Can be disabled via autoClose: false Default: 3000, error = 4000, loading = 30000**/
  duration?: number;
  /**	Auto close hot-toast after duration Default: true**/
  autoClose?: boolean;
  /**	The position to place the hot-toast. Default: top-center **/
  position?: ToastPosition;
  /**	Show close button in hot-toast Default: false**/
  dismissible?: boolean;
  /**	Role of the live region. Default: status**/
  role?: ToastRole;
  /**	aria-live value for the live region. Default: polite	**/
  ariaLive?: ToastAriaLive;
  /**	Visual appearance of hot-toast Default: toast**/
  theme?: ToastTheme;
  /**	Useful when you want to keep a persistance for toast based on ids, across sessions. **/
  persist?: {enabled: boolean};
  /**	Icon to show in the hot-toast **/
  icon?: Content;
  /**	Use this to change icon color **/
  iconTheme?: IconTheme;
  /**	Extra CSS classes to be added to the hot toast container. **/
  className?: string;
  /** Extra attributes to be added to the hot toast container. Can be used for e2e tests. **/
  attributes?: Record<string, string>;
  /** Extra styles to apply for hot-toast. **/
  style?: object;
  /** Extra styles to apply for close button	Yes **/
  data?: object;
  /**	Allows you to pass data for your template and component. You can access the data using toastRef.data. **/
  closeStyle?: object;
  /**	Allows you to pass injector for your component. **/
  injector?: Injector;
}
