import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toPrice'
})
export class ToPricePipe implements PipeTransform {
  static readonly thousand = 1000;
  static readonly million = 1000000;
  static readonly billion = 1000000000;


  transform(amount: number, currency: string = '$'): string {
    let price = amount.toFixed(2);

    if (amount > ToPricePipe.billion) {
      price = (amount / ToPricePipe.billion).toFixed(2) + "B";
    } else if (amount > ToPricePipe.million) {
      price = (amount / ToPricePipe.million).toFixed(2) + "M";
    } else if (amount > ToPricePipe.thousand) {
      price = (amount / ToPricePipe.thousand).toFixed(2) + "K";
    }

    return currency + price;
  }

}
