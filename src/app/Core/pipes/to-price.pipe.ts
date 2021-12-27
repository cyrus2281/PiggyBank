import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toPrice'
})
export class ToPricePipe implements PipeTransform {

  transform(amount: number, currency: string = '$'): string {
    return currency + amount.toFixed(2);
  }

}
