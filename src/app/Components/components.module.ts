import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { LabelInputComponent } from './component/label-input/label-input.component';
import { ButtonComponent } from './component/button/button.component';
import { IconComponent } from "./icon/icon.component";
import { CoreModule } from "../Core/core.module";
import { CheckboxComponent } from './component/checkbox/checkbox.component';
import { RadioButtonComponent } from './component/radio-button/radio-button.component';
import { SlideToggleComponent } from './component/slide-toggle/slide-toggle.component';
import { DatePickerComponent } from './component/date-picker/date-picker.component';
import { MasterLayoutComponent } from './component/master-layout/master-layout.component';
import { ProgressBarComponent } from './component/progress-bar/progress-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from "@angular/material/core";
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ProgressBarWrapperComponent } from './component/progress-bar-wrapper/progress-bar-wrapper.component';
import { ScrollPanelComponent } from './component/scroll-panel/scroll-panel.component';
import { LabelInfoComponent } from './component/label-info/label-info.component';
import { DropDownComponent } from './component/drop-down/drop-down.component';
import { IconPickerComponent } from './component/icon-picker/icon-picker.component';

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
    ProgressBarWrapperComponent,
    ScrollPanelComponent,
    LabelInfoComponent,
    DropDownComponent,
    IconPickerComponent,
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
    MatProgressBarModule,
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
    ProgressBarComponent,
    ProgressBarWrapperComponent,
    ScrollPanelComponent,
    LabelInfoComponent,
    DropDownComponent,
    IconPickerComponent,
  ]
})
export class ComponentsModule { }
