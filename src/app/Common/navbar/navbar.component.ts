import { Component, OnInit } from '@angular/core';
import APP_THEME from 'src/app/Core/theme/theme';

@Component({
  selector: 'pg-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  app_theme = APP_THEME;

  constructor() { }

  ngOnInit(): void {
  }

}
