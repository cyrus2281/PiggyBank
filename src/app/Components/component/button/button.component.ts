import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonStyleEnum } from 'src/app/Components/enum/button-style.enum';
import APP_THEME from 'src/app/Core/theme/theme';

@Component({
  selector: 'pg-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  app_theme = APP_THEME;
  @Input() label!: string;
  @Input() name!: string;
  @Input() type: string = 'button';
  @Input() disabled: boolean = false;
  @Input() shadow: boolean = false;
  @Input() circle: boolean = false;
  @Input() style!: ButtonStyleEnum;
  @Output() focus= new EventEmitter();

  constructor() { }
}
