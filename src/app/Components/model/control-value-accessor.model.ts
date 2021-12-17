import { ControlValueAccessor } from '@angular/forms';

export abstract class ControlValueAccessorModel<T> implements ControlValueAccessor {
  value!: T;

  onModelChange: (value: T) => void = () => {};
  onModelTouched: () => void = () => {};

  writeValue(value: T): void {
      this.value = value;
  }

  registerOnChange(fn: (value: T) => void): void {
      this.onModelChange = fn;
  }

  registerOnTouched(fn: () => void): void {
      this.onModelTouched = fn;
  }
}
