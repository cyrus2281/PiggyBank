import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ButtonStyleEnum } from 'src/app/Components/enum/button-style.enum';
import { ControlValueAccessorModel } from 'src/app/Components/model/control-value-accessor.model';

@Component({
  selector: 'pg-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatePickerComponent),
      multi: true
    }
  ]
})
export class DatePickerComponent extends ControlValueAccessorModel<any> implements OnInit{
  @Input() isRange: boolean = false;
  @Input() label: string = '';
  @Input() startLabel: string = '';
  @Input() endLabel: string = '';
  @Input() disabled: boolean = false;
  @Input() style: 'standard' | 'fill' | 'outline' = 'outline'

  @Output() change = new EventEmitter<string>();

  touchUi = false;
  applyStyle = ButtonStyleEnum.PRIMARY;
  cancelStyle = ButtonStyleEnum.PALE;
  start!: Date ;
  end!: Date ;

  ngOnInit(): void {
  }

  dateChange(date: Date, isStart: boolean){
    if (isStart) {
      this.value.start = date;
    } else {
      this.value.end = date;
    }
    this.onModelChange(this.value);
  }
}
