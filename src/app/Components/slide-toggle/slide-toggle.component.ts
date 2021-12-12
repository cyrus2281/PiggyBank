import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ControlValueAccessorModel } from 'src/app/Model/control-value-accessor.model';

@Component({
  selector: 'pg-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SlideToggleComponent),
      multi: true
    }
  ]
})
export class SlideToggleComponent extends ControlValueAccessorModel<boolean> {
  @Input() name: string = '';
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() checked: boolean = false;
  @Input() dashed: boolean = false;
  @Input() ripple: boolean = false;
  @Input() labelPosition: 'before' | 'after' = 'after';

  @Output() change = new EventEmitter<boolean>();
}
