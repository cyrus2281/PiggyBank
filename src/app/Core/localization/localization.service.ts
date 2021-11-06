import { Injectable } from '@angular/core';
import { localization as en } from './en.lang';
import { LocalizationArgumentModel } from './localization-argument.model';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
  languages: { [lang: string]: { [token: string]: string }; } = {};
  sysLang: string = 'en';

  constructor() {
    this.languages['en'] = en;
    console.log(en);
  }

  public translate(token: string, ...args: LocalizationArgumentModel[]) {
    if (this.languages[this.sysLang][token]) {
      if (args?.length > 0) {
        let translation = this.languages[this.sysLang][token];
        args.forEach(arg => {
          translation = translation.split('{{'+arg.key+'}}').join(arg.value);
        });
        return translation;
      }
      return this.languages[this.sysLang][token];

    }
    return token;
  }
}
