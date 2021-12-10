import { Injectable } from '@angular/core';
import { HotToastService, ToastOptions } from '@ngneat/hot-toast';
import { LocalizationService } from '../localization/localization.service';
import { MessageOptionModel } from './message-options.model';
import { MessageTypeEnum } from './message-type.enum';
import {ToastTheme } from "@ngneat/hot-toast";
import APP_THEME from '../theme/theme';

@Injectable({
  providedIn: 'root'
})
/**
 * https://ngneat.github.io/hot-toast/
 */
export class MessageService {

  constructor(private localizationService: LocalizationService, private toastService: HotToastService) {
    const theme = APP_THEME.theme === 'lightMode' ? 'toast' : 'snackbar' as ToastTheme;
    const defaultConfig = {...this.toastService.defaultConfig, theme};
    this.toastService.defaultConfig = defaultConfig;
  }

  showMessage(message: string, action: MessageTypeEnum = MessageTypeEnum.show, options?: MessageOptionModel) {
    message = this.localizationService.translate(message);
    return this.toastService[action](message, options);
  }

  showDynamicMessage(
    loading: string,
    success: string | ((data: any) => any),
    error: string | ((data: any) => any)
  ) {
    return this.toastService.observe({ loading, success, error });
  }
}

