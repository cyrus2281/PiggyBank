import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LabelInputComponent } from './label-input/label-input.component';

@NgModule({
  declarations: [
    LabelInputComponent
  ],
  imports: [
      CommonModule
  ],
  exports: [
    LabelInputComponent
  ]
})
export class ComponentsModule { }
