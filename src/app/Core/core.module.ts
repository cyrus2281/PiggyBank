import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HotToastModule } from "@ngneat/hot-toast";
import { LocalizePipe } from './localization/localize.pipe';
import { RouterService } from "./routing/router.service";
import {MatTooltipModule} from '@angular/material/tooltip';
import { TextLimitPipe } from './pipes/text-limit.pipe';
import { ToPricePipe } from './pipes/to-price.pipe';

@NgModule({
  declarations: [
    LocalizePipe,
    TextLimitPipe,
    ToPricePipe
  ],
  imports: [
      CommonModule,
      HotToastModule.forRoot(),
      MatTooltipModule
  ],
  exports: [
    LocalizePipe,
    TextLimitPipe,
    ToPricePipe,
    MatTooltipModule,
  ],
  providers: [
    RouterService
  ]
})
export class CoreModule { }
