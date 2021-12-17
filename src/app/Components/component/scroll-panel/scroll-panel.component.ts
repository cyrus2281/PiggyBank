import { Component, Input, OnInit } from '@angular/core';
import APP_THEME from 'src/app/Core/theme/theme';

@Component({
  selector: 'pg-scroll-panel',
  templateUrl: './scroll-panel.component.html',
  styleUrls: ['./scroll-panel.component.scss']
})
export class ScrollPanelComponent {
  @Input() right: boolean = false;
  @Input() top: boolean = false;
  @Input() hidden: boolean = false;
  @Input() color: boolean = true;

  app_theme = APP_THEME;
}
