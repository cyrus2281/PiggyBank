import { Component, OnInit } from '@angular/core';
import { ProgressBarMode } from 'src/app/Components/progress-bar/progress-bar.component';
import { ButtonStyleEnum } from 'src/app/Core/enum/button-style.enum';
import APP_THEME from 'src/app/Core/theme/theme';

@Component({
  selector: 'pg-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {
  app_theme = APP_THEME;
  buttonStyle = ButtonStyleEnum;
  mode: ProgressBarMode[] = ['determinate', 'indeterminate', 'buffer', 'query', 'breath'];
  num = 4;

  constructor() { }

  ngOnInit(): void {}

  change() {
    if (this.num < 4) {
      this.num++;
    } else {
      this.num = 0
    }
  }
}
