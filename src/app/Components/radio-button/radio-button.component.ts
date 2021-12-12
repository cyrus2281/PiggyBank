import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorModel } from 'src/app/Model/control-value-accessor.model';
import { RadioButtonModel } from 'src/app/Model/radio-button-model';


@Component({
  selector: 'pg-radio-button',
  templateUrl: './radio-button.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioButtonComponent),
      multi: true
    }
  ]
})
export class RadioButtonComponent<T> extends ControlValueAccessorModel<T> {
  @Input() name: string = '';
  @Input() class: string = '';
  @Input() ripple: boolean = false;
  @Input() labelPosition: 'before' | 'after' = 'after';
  @Input() options!: RadioButtonModel<T>[];

  @Output() change = new EventEmitter<any>();
}

