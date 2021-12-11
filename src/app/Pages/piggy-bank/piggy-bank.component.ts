import { Component, OnInit } from '@angular/core';
import APP_THEME from 'src/app/Core/theme/theme';

@Component({
  selector: 'pg-piggy-bank',
  templateUrl: './piggy-bank.component.html',
  styleUrls: ['./piggy-bank.component.scss']
})
export class PiggyBankComponent implements OnInit {
  app_theme = APP_THEME;
  test!: boolean;

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      console.log(this.test);
    }, 5000)
  }

}
