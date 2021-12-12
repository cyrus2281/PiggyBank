import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { LabelInputComponent } from './label-input/label-input.component';
import { ButtonComponent } from './button/button.component';
import { IconComponent } from "./icon/icon.component";
import { CoreModule } from "../Core/core.module";
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { MasterLayoutComponent } from './master-layout/master-layout.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from "@angular/material/core";
import { MatInputModule } from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    LabelInputComponent,
    ButtonComponent,
    IconComponent,
    CheckboxComponent,
    RadioButtonComponent,
    SlideToggleComponent,
    DatePickerComponent,
    MasterLayoutComponent,
    ProgressBarComponent,
  ],
  imports: [
      CommonModule,
      BrowserModule,
      FormsModule,
      CoreModule,
      MatIconModule,
      MatCheckboxModule,
      MatRadioModule,
      MatSlideToggleModule,
      MatDatepickerModule,
      MatFormFieldModule,
      MatNativeDateModule,
      MatInputModule,
      MatAutocompleteModule,
    ],
  exports: [
    LabelInputComponent,
    ButtonComponent,
    IconComponent,
    CheckboxComponent,
    RadioButtonComponent,
    SlideToggleComponent,
    DatePickerComponent,
    MasterLayoutComponent,
  ]
})
export class ComponentsModule { }
