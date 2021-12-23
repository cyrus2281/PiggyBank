
import { Observable } from "rxjs";
import { ProgressBarMode } from "src/app/Components/component/progress-bar/progress-bar.component";
import { ActionBarButtonTypeEnum } from "../enum/action-bar-button-type.enum";
import { ActionBarButtonModel } from "./action-bar-button.model";

export interface ActionBarServiceModel {
  /**
   * returns an array of all action bar buttons
   */
  getButtons(): Observable<Map<ActionBarButtonTypeEnum, ActionBarButtonModel>>;

  /**
   * includes the action for each button type when clicked
   * @param type
   */
  buttonClicked(type: ActionBarButtonTypeEnum): void;

  /**
   * returns the mode for the progress bar
   */
  getProgressBarMode(): Observable<ProgressBarMode>;

  /**
   * returns whether progress bar should be in error mode or not
   */
  getProgressBarError(): Observable<boolean>;


}
