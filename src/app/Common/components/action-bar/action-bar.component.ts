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
  actionBarButtonType = ActionBarButtonTypeEnum;

  subscriptions = new SubSink();

  progressBarMode: ProgressBarMode = 'breath';
  progressBarError: boolean = false;
  actionBarButtons!: Map<ActionBarButtonTypeEnum, ActionBarButtonModel>;
  // actionBarService.buttonClicked()

  constructor(@Inject('ActionBarServiceModel') private actionBarService: ActionBarServiceModel) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.actionBarService.getButtons().subscribe(buttons => this.actionBarButtons = buttons),
      this.actionBarService.getProgressBarMode().subscribe(mode => this.progressBarMode = mode),
      this.actionBarService.getProgressBarError().subscribe(hasError => this.progressBarError = hasError),
    );
  }


  ngOnDestroy(): void {
      this.subscriptions.unsubscribe()
  }
}
