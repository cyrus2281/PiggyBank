import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Account/services/auth.service';
import { IconSizeEnum } from '../../Components/icon/icons/icon.enum';
import { HeaderService } from '../header/header.service';
import APP_THEME from '../../Core/theme/theme';

@Component({
  selector: 'pg-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  app_theme = APP_THEME;
  iconSize = IconSizeEnum.xxlarge;

  constructor(public headerService: HeaderService, public authService: AuthService) { }

  ngOnInit(): void {
  }

}
