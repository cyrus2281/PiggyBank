import { Pipe, PipeTransform } from '@angular/core';
import { LocalizationArgumentModel } from './localization-argument.model';
import { LocalizationService } from './localization.service';

@Pipe({
  name: 'localize'
})
export class LocalizePipe implements PipeTransform {

  constructor(private localizationService: LocalizationService){}

  transform(value: string, ...args: LocalizationArgumentModel[]): string {
    return this.localizationService.translate(value, ...args);
  }
}
