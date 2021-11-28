import { Component, OnInit } from '@angular/core';
import { IconSizeEnum } from 'src/app/Components/icon/icons/icon.enum';
import APP_THEME from 'src/app/Core/theme/theme';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'pg-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  app_theme = APP_THEME;
  iconSize = IconSizeEnum.xxlarge;

  constructor(public headerService: HeaderService) { }

  ngOnInit(): void {
  }

}
