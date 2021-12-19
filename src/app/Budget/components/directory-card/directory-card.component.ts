import { Component, OnInit } from '@angular/core';
import { SideBarItemComponent } from 'src/app/Common/components/side-bar-item/side-bar-item.component';
import { DirectoryCard } from '../../models/directory-card';

@Component({
  selector: 'pg-directory-card',
  templateUrl: './directory-card.component.html',
  styleUrls: ['./directory-card.component.scss']
})
export class DirectoryCardComponent extends SideBarItemComponent<DirectoryCard> implements OnInit {

  ngOnInit(): void {
  }

}
