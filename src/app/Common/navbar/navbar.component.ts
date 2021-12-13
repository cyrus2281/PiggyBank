import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../Account/services/auth.service';
import { IconSizeEnum } from '../../Components/icon/icons/icon.enum';
import { HeaderService } from '../header/header.service';
import APP_THEME from '../../Core/theme/theme';
import { SubSink } from 'subsink';

@Component({
  selector: 'pg-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  app_theme = APP_THEME;
  iconSize = IconSizeEnum.xxlarge;

  subscriptions = new SubSink();
  showMenu: boolean = false;
  showSideBar: boolean = false;

  constructor(public headerService: HeaderService, public authService: AuthService) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.headerService.getMenuStatus().subscribe(show => this.showMenu = show),
      this.headerService.getSideBarStatus().subscribe(show => this.showSideBar = show),
      );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
}
}
