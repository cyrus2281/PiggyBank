import { Component, OnDestroy, OnInit } from '@angular/core';
import APP_THEME from 'src/app/Core/theme/theme';
import { SubSink } from 'subsink';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'pg-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit, OnDestroy {
  app_theme = APP_THEME;
  subscriptions = new SubSink();
  show: boolean = false;

  constructor(public headerService: HeaderService) { }

  ngOnInit(): void {
    this.subscriptions.add(this.headerService.getSideBarStatus().subscribe(show => this.show = show));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
