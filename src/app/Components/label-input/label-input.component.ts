import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import APP_THEME from 'src/app/Core/theme/theme';

@Component({
  selector: 'pg-label-input',
  templateUrl: './label-input.component.html',
  styleUrls: ['./label-input.component.scss']
})
export class LabelInputComponent implements OnInit {
  app_theme = APP_THEME;
  @Input() value!: string;
  @Input() label!: string;
  @Input() name!: string;
  @Input() type: string = 'test';
  @Input() required: boolean = false;

  @Output() onChange = new EventEmitter();
  @Output() onKeyUp = new EventEmitter();
  @Output() onKeyDown = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
