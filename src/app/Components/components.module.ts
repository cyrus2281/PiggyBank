import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { LabelInputComponent } from './label-input/label-input.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    LabelInputComponent,
    ButtonComponent
  ],
  imports: [
      CommonModule,
      BrowserModule,
      FormsModule
  ],
  exports: [
    LabelInputComponent,
    ButtonComponent
  ]
})
export class ComponentsModule { }
