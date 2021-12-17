import { Component, OnInit } from '@angular/core';
import APP_THEME from 'src/app/Core/theme/theme';

@Component({
  selector: 'pg-piggy-bank',
  templateUrl: './piggy-bank.component.html',
})
export class PiggyBankComponent implements OnInit {
  app_theme = APP_THEME;

  constructor() { }

  ngOnInit(): void {}

}
