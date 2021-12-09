import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HotToastModule } from "@ngneat/hot-toast";
import { LocalizePipe } from './localization/localize.pipe';
import { RouterService } from "./routing/router.service";
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    LocalizePipe
  ],
  imports: [
      CommonModule,
      HotToastModule.forRoot(),
      MatTooltipModule
  ],
  exports: [
    LocalizePipe,
    MatTooltipModule
  ],
  providers: [
    RouterService
  ]
})
export class CoreModule { }
