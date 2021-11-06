import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { LabelInputComponent } from './label-input/label-input.component';

@NgModule({
  declarations: [
    LabelInputComponent
  ],
  imports: [
      CommonModule,
      BrowserModule,
      FormsModule
  ],
  exports: [
    LabelInputComponent
  ]
})
export class ComponentsModule { }
