import { Component, OnInit } from '@angular/core';
import { SideBarItemComponent } from 'src/app/Common/components/side-bar-item/side-bar-item.component';
import { IconSizeEnum } from 'src/app/Components/icon/icons/icon.enum';
import { DirectorySidebarCard } from '../../models/directory-sidebar-card';

@Component({
  selector: 'pg-directory-card',
  templateUrl: './directory-card.component.html',
  styleUrls: ['./directory-card.component.scss']
})
export class DirectoryCardComponent extends SideBarItemComponent<DirectorySidebarCard> implements OnInit {
  largeIcon = IconSizeEnum.large;

  ngOnInit(): void {
  }

}
