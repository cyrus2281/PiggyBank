import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Validator } from 'src/app/Core/utilities/validate.utils';
import { ControlValueAccessorModel } from 'src/app/Components/model/control-value-accessor.model';

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
  @Input() label!: string;
  @Input() name!: string;
  @Input() type: string = 'text';
  @Input() required: boolean = false;
  @Input() readOnly: boolean = false;
  @Input() disabled: boolean = false;
  @Input() multiLine: boolean = false;
  @Input() validate: Validator = (value: string) => ({isValid: !!value, error:''});
  @Input() validateArgs: any[] = [];
  @Input() options!: string[];
  @Input() auto!: any;
  @Input() lines: number = 4;

  @Output() change = new EventEmitter();
  @Output() onKeyUp = new EventEmitter();
  @Output() onKeyDown = new EventEmitter();
  @Output() isValid = new EventEmitter<boolean>();

  error: string = '';
  valid: boolean = true;
  filteredOptions!: string[];

  ngOnInit(): void {
    this.filteredOptions = this.options;
  }

  private _filter(value: string) {
    const filterValue = this._normalizeValue(value);
    this.filteredOptions = this.options.filter(option => this._normalizeValue(option).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  valueChange(option: string){
    if (this.options){
      this._filter(option);
    }
    const validation = this.validate(this.value, ...this.validateArgs);
    this.valid = validation.isValid;
    this.error = !!validation.error ? validation.error : this.error;
    this.isValid.emit(this.valid);
    this.onModelChange(this.value);
  }
}
