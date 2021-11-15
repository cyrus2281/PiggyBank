import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import APP_THEME from 'src/app/Core/theme/theme';
import { ControlValueAccessorModel } from 'src/app/Model/control-value-accessor.model';

@Component({
  selector: 'pg-label-input',
  templateUrl: './label-input.component.html',
  styleUrls: ['./label-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LabelInputComponent),
      multi: true
    }
  ]
})
export class LabelInputComponent extends ControlValueAccessorModel<string> implements OnInit {
  app_theme = APP_THEME;
  @Input() label!: string;
  @Input() name!: string;
  @Input() type: string = 'text';
  @Input() required: boolean = false;
  @Input() readOnly: boolean = false;
  @Input() disabled: boolean = false;

  @Output() change = new EventEmitter();
  @Output() onKeyUp = new EventEmitter();
  @Output() onKeyDown = new EventEmitter();

  ngOnInit(): void {
  }

}
