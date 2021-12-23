import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ProgressBarMode } from 'src/app/Components/component/progress-bar/progress-bar.component';
import { ButtonStyleEnum } from 'src/app/Components/enum/button-style.enum';
import { SubSink } from 'subsink';
import { ActionBarButtonTypeEnum } from '../../enum/action-bar-button-type.enum';
import { ActionBarButtonModel } from '../../models/action-bar-button.model';
import { ActionBarServiceModel } from '../../models/action-bar-service.model';

@Component({
  selector: 'pg-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit, OnDestroy {
  buttonStyle = ButtonStyleEnum;
  buttonType = ActionBarButtonTypeEnum;

  subscriptions = new SubSink();

  progressBarMode: ProgressBarMode = 'breath';
  progressBarError: boolean = false;

  btnLeft?: ActionBarButtonModel;
  btnRight?: ActionBarButtonModel;
  wheelBtn1?: ActionBarButtonModel;
  wheelBtn2?: ActionBarButtonModel;
  wheelBtn3?: ActionBarButtonModel;
  showWheel: boolean = false;

  constructor(@Inject('ActionBarServiceModel') public actionBarService: ActionBarServiceModel) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.actionBarService.getButtons().subscribe(buttons => {
        this.btnLeft = buttons?.get(ActionBarButtonTypeEnum.MAIN_LEFT);
        this.btnRight = buttons?.get(ActionBarButtonTypeEnum.MAIN_RIGHT);
        this.wheelBtn1 = buttons?.get(ActionBarButtonTypeEnum.WHEEL_ONE);
        this.wheelBtn2 = buttons?.get(ActionBarButtonTypeEnum.WHEEL_TWO);
        this.wheelBtn3 = buttons?.get(ActionBarButtonTypeEnum.WHEEL_THREE);
      }),
      this.actionBarService.getProgressBarMode().subscribe(mode => this.progressBarMode = mode),
      this.actionBarService.getProgressBarError().subscribe(hasError => this.progressBarError = hasError),
    );
  }

  setShowWheel(event: FocusEvent) {
    if (event.type === 'focus') {
      this.showWheel = true;
    } else if (event.type === 'focusout') {
      setTimeout(() => {
        this.showWheel = false;
      }, 200);
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }
}
