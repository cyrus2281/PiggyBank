import { Component, OnInit } from '@angular/core';
import APP_THEME from 'src/app/Core/theme/theme';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'pg-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  app_theme = APP_THEME;

  constructor(public headerService: HeaderService) { }

  ngOnInit(): void {
  }

}
