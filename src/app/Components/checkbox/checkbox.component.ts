import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorModel } from 'src/app/Model/control-value-accessor.model';

@Component({
  selector: 'pg-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent extends ControlValueAccessorModel<boolean> {
  @Input() name: string = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() checked: boolean = false;
  @Input() dashed: boolean = false;
  @Input() ripple: boolean = false;
  @Input() labelPosition: 'before' | 'after' = 'before';

  @Output() change = new EventEmitter<boolean>();

  constructor() {
    super();
    setInterval(() => {
      console.log('value: ' + this.value);
    }, 5000)
  }

}
