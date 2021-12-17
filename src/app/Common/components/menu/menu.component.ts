import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Account/services/auth.service';
import APP_THEME from 'src/app/Core/theme/theme';
import { SubSink } from 'subsink';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'pg-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnDestroy {
  app_theme = APP_THEME;
  subscriptions = new SubSink();
  show: boolean = false;

  constructor(public headerService: HeaderService, public authService: AuthService) { }


  ngOnInit(): void {
    this.subscriptions.add(this.headerService.getMenuStatus().subscribe(show => this.show = show));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
