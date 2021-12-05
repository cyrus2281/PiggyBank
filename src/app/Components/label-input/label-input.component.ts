import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import APP_THEME from 'src/app/Core/theme/theme';
import { Validator } from 'src/app/Core/utilities/validate.utils';
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
  @Input() validate: Validator = (value: string) => ({isValid: !!value, error:''});
  @Input() validateArgs: any[] = [];
  @Output() change = new EventEmitter();
  @Output() onKeyUp = new EventEmitter();
  @Output() onKeyDown = new EventEmitter();
  @Output() isValid = new EventEmitter<boolean>();
  error: string = '';
  valid: boolean = true;

  ngOnInit(): void {
  }

  keyUp(event: Event){
    this.onKeyUp.emit(event);
    const validation = this.validate(this.value, ...this.validateArgs);
    this.valid = validation.isValid;
    this.error = validation.error;
    this.isValid.emit(this.valid);
  }
}
