import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonStyleEnum } from 'src/app/Components/enum/button-style.enum';

@Component({
  selector: 'pg-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
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
