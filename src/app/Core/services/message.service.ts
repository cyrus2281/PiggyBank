import { Injectable } from '@angular/core';
import { LocalizationService } from '../localization/localization.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private localizationService : LocalizationService) { }

  showMessage(message: string, header: string = '') {
    message = this.localizationService.translate(message);
    header = this.localizationService.translate(header);
    console.log(message, header);
  }
}
