import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { LabelInputComponent } from './label-input/label-input.component';
import { ButtonComponent } from './button/button.component';
import {MatIconModule} from '@angular/material/icon';
import { IconComponent } from "./icon/icon.component";

@NgModule({
  declarations: [
    LabelInputComponent,
    ButtonComponent,
    IconComponent,
  ],
  imports: [
      CommonModule,
      BrowserModule,
      FormsModule,
      MatIconModule
  ],
  exports: [
    LabelInputComponent,
    ButtonComponent,
    IconComponent,
  ]
})
export class ComponentsModule { }
