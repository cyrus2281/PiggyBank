import { ActionBarButtonTypeEnum } from "../enum/action-bar-button-type.enum";

export interface ActionBarButtonModel {
  type: ActionBarButtonTypeEnum;
  visible: boolean;
  disable: boolean;
  label?: string;
  tooltip?: string;
  icon?: string;
}
