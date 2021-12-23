import { Injectable } from "@angular/core";
import { EMPTY, Observable, of } from "rxjs";
import { ActionBarButtonTypeEnum } from "src/app/Common/enum/action-bar-button-type.enum";
import { ActionBarButtonModel } from "src/app/Common/models/action-bar-button.model";
import { ActionBarServiceModel } from "src/app/Common/models/action-bar-service.model";
import { ProgressBarMode } from "src/app/Components/component/progress-bar/progress-bar.component";

@Injectable()
export class BudgetActionBarService implements ActionBarServiceModel {
  readonly budgetActionBarButtons: Map<ActionBarButtonTypeEnum, ActionBarButtonModel> = new Map(
    [
        [ActionBarButtonTypeEnum.MAIN_LEFT, {
          type:ActionBarButtonTypeEnum.MAIN_LEFT,
          visible: true,
          disable: false,
          label: 'Action 1',
          tooltip: '',
        }],
        [ActionBarButtonTypeEnum.MAIN_RIGHT, {
          type:ActionBarButtonTypeEnum.MAIN_RIGHT,
          visible: true,
          disable: false,
          label: 'Action two',
          tooltip: '',
        }],
        [ActionBarButtonTypeEnum.WHEEL_ONE, {
          type:ActionBarButtonTypeEnum.WHEEL_ONE,
          visible: true,
          disable: false,
          icon: 'arrow_downward',
          tooltip: 'actionBar.budget.add.transaction.expense',
        }],
        [ActionBarButtonTypeEnum.WHEEL_TWO, {
          type:ActionBarButtonTypeEnum.WHEEL_TWO,
          visible: true,
          disable: false,
          icon: 'playlist_add',
          tooltip: 'actionBar.budget.add.subDirectory',
        }],
        [ActionBarButtonTypeEnum.WHEEL_THREE, {
          type:ActionBarButtonTypeEnum.WHEEL_THREE,
          visible: true,
          disable: false,
          icon: 'arrow_upward',
          tooltip: 'actionBar.budget.add.transaction.income',
        }],
    ]
);

  getButtons(): Observable<Map<ActionBarButtonTypeEnum, ActionBarButtonModel>> {
    return of(this.budgetActionBarButtons);
  }
  buttonClicked(type: ActionBarButtonTypeEnum): void {
    console.log(type);
  }
  getProgressBarMode(): Observable<ProgressBarMode> {
    return EMPTY;
  }
  getProgressBarError(): Observable<boolean> {
    return EMPTY;
  }
}
