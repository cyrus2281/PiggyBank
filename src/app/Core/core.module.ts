import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LocalizePipe } from './localization/localize.pipe';
import { RouterService } from "./routing/router.service";
@NgModule({
  declarations: [
    LocalizePipe
  ],
  imports: [
      CommonModule
  ],
  exports: [
    LocalizePipe
  ],
  providers: [
    RouterService
  ]
})
export class CoreModule { }
