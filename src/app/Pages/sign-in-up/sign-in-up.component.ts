import { Component, OnInit } from '@angular/core';
import APP_THEME from 'src/app/Core/theme/theme';

@Component({
  selector: 'pg-sign-in-up',
  templateUrl: './sign-in-up.component.html',
  styleUrls: ['./sign-in-up.component.scss']
})
export class SignInUpComponent implements OnInit {
  app_theme = APP_THEME;

  constructor() { }

  ngOnInit(): void {
  }

}
