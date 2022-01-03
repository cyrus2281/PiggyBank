import { Injectable } from '@angular/core';
import { HotToastService, ToastOptions } from '@ngneat/hot-toast';
import { LocalizationService } from '../localization/localization.service';
import { MessageOptionModel } from './message-options.model';
import { MessageTypeEnum } from './message-type.enum';
import { ToastTheme } from "@ngneat/hot-toast";
import APP_THEME from '../theme/theme';

@Injectable({
  providedIn: 'root'
})
/**
 * https://ngneat.github.io/hot-toast/
 */
export class MessageService {
  private readonly formspreeURL = "https://formspree.io/f/xwkypbld";

  constructor(private localizationService: LocalizationService, private toastService: HotToastService) {
    const theme = APP_THEME.theme === 'lightMode' ? 'toast' : 'snackbar' as ToastTheme;
    const defaultConfig = { ...this.toastService.defaultConfig, theme };
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

  async sendEmail(options: { [name: string]: string }): Promise<boolean> {
    const formData = new FormData();
    Object.keys(options).forEach(key => formData.append(key, options[key]));

    return await fetch(this.formspreeURL, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      this.showMessage('validate.success.message', MessageTypeEnum.success);
      return true;
    }).catch(error => {
      this.showMessage('validate.error.message', MessageTypeEnum.error);
      return false;
    });
  }
}

