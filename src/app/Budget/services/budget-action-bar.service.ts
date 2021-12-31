import { Injectable } from "@angular/core";
import { EMPTY, Observable, of } from "rxjs";
import { ActionBarButtonTypeEnum } from "src/app/Common/enum/action-bar-button-type.enum";
import { ActionBarButtonModel } from "src/app/Common/models/action-bar-button.model";
import { ActionBarServiceModel } from "src/app/Common/models/action-bar-service.model";
import { ProgressBarMode } from "src/app/Components/component/progress-bar/progress-bar.component";
import { MessageService } from "src/app/Core/message/message.service";

@Injectable()
export class BudgetActionBarService implements ActionBarServiceModel {
  readonly budgetActionBarButtons: Map<ActionBarButtonTypeEnum, ActionBarButtonModel> = new Map(
    [
      [ActionBarButtonTypeEnum.MAIN_LEFT, {
        type: ActionBarButtonTypeEnum.MAIN_LEFT,
        visible: true,
        disable: false,
        label: 'Action 1',
        tooltip: '',
      }],
      [ActionBarButtonTypeEnum.MAIN_RIGHT, {
        type: ActionBarButtonTypeEnum.MAIN_RIGHT,
        visible: true,
        disable: false,
        label: 'Action 2',
        tooltip: '',
      }],
      [ActionBarButtonTypeEnum.WHEEL_ONE, {
        type: ActionBarButtonTypeEnum.WHEEL_ONE,
        visible: true,
        disable: false,
        icon: 'arrow_downward',
        tooltip: 'actionBar.budget.add.transaction.expense',
      }],
      [ActionBarButtonTypeEnum.WHEEL_TWO, {
        type: ActionBarButtonTypeEnum.WHEEL_TWO,
        visible: true,
        disable: false,
        icon: 'playlist_add',
        tooltip: 'actionBar.budget.add.subDirectory',
      }],
      [ActionBarButtonTypeEnum.WHEEL_THREE, {
        type: ActionBarButtonTypeEnum.WHEEL_THREE,
        visible: true,
        disable: false,
        icon: 'arrow_upward',
        tooltip: 'actionBar.budget.add.transaction.income',
      }],
    ]
  );

  constructor(private messageService: MessageService) { }

  getButtons(): Observable<Map<ActionBarButtonTypeEnum, ActionBarButtonModel>> {
    return of(this.budgetActionBarButtons);
  }

  buttonClicked(type: ActionBarButtonTypeEnum): void {
    console.log(type);
    if (type === 'MAIN_LEFT') {
      this.messageService.sendEmail({
        name: 'Cyrus',
        age: '19',
        _replyto: 'ecocyrus@gmail.com',
        message: 'this is very cool, thanks'
      })
    }
  }
  getProgressBarMode(): Observable<ProgressBarMode> {
    return EMPTY;
  }
  getProgressBarError(): Observable<boolean> {
    return EMPTY;
  }
}
