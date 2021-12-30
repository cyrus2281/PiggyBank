import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Account/services/auth.service';
import APP_THEME from 'src/app/Core/theme/theme';
import { SubSink } from 'subsink';
import { HeaderService } from '../../services/header.service';
import * as Routes from 'src/app/Core/routes/app-routes';
import { ButtonStyleEnum } from 'src/app/Components/enum/button-style.enum';

@Component({
  selector: 'pg-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  app_theme = APP_THEME;
  buttonStyle = ButtonStyleEnum;
  routes = Routes;

  subscriptions = new SubSink();
  show: boolean = false;

  constructor(public headerService: HeaderService, public authService: AuthService) { }


  ngOnInit(): void {
    this.subscriptions.add(this.headerService.getMenuStatus().subscribe(show => this.show = show));
  }

  signOut() {
    this.authService.signOut();
    this.headerService.showMenu(false);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
