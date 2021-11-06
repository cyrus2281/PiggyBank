import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LocalizePipe } from './localization/localize.pipe';
@NgModule({
  declarations: [
    LocalizePipe
  ],
  imports: [
      CommonModule
  ],
  exports: [
    LocalizePipe
  ]
})
export class CoreModule { }
