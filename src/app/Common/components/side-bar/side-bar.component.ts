import { Component, OnDestroy, OnInit } from '@angular/core';
import { DirectoryCardModel } from 'src/app/Budget/models/directory-card.model';
import APP_THEME from 'src/app/Core/theme/theme';
import { SubSink } from 'subsink';
import { SideBarItemModelInterface } from '../../models/side-bar-item.model';
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

  constructor(public headerService: HeaderService) {
    this.items.push(new DirectoryCardModel('test one'), new DirectoryCardModel('test two'), new DirectoryCardModel('test three'));
   }

  ngOnInit(): void {
    this.subscriptions.add(this.headerService.getSideBarStatus().subscribe(show => this.show = show));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
