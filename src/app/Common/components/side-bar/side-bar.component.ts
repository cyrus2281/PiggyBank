import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import APP_THEME from 'src/app/Core/theme/theme';
import { SubSink } from 'subsink';
import { SideBarItemModelInterface } from '../../models/side-bar-item.model';
import { SideBarServiceInterface } from '../../models/side-bar-service.interface';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'pg-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit, OnDestroy {
  app_theme = APP_THEME;
  subscriptions = new SubSink();
  show: boolean = false;
  items: SideBarItemModelInterface[] = [];

  constructor(
    public headerService: HeaderService,
    @Inject('SideBarServiceInterface') private sidebarService: SideBarServiceInterface<any>
  ) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.headerService.getSideBarStatus().subscribe(show => this.show = show),
      this.sidebarService.getSidebarItems().subscribe(items => this.items = items)
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
