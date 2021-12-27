import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import APP_THEME from 'src/app/Core/theme/theme';
import { SubSink } from 'subsink';
import { SideBarActionEventEnum } from '../../enum/side-bar-action-event.enum';
import { SideBarItemModel } from '../../models/side-bar-item.model';
import { SideBarServiceModel } from '../../models/side-bar-service.model';
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
  items: SideBarItemModel[] = [];
  selectedItem!: SideBarItemModel;

  constructor(
    public headerService: HeaderService,
    @Inject('SideBarServiceModel') private sidebarService: SideBarServiceModel<any>
  ) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.headerService.getSideBarStatus().subscribe(show => this.show = show),
      this.sidebarService.getSidebarItems().subscribe(items => this.items = items),
      this.sidebarService.getSelectedSidebarItem().subscribe(item => this.selectedItem = item),
    );
  }

  onAction(item:SideBarItemModel, action: SideBarActionEventEnum){
    this.sidebarService.selectSidebarItem(item, action)
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
