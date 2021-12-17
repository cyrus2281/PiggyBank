import { Component, OnInit } from '@angular/core';
import { SideBarItemComponent } from 'src/app/Common/components/side-bar-item/side-bar-item.component';
import { DirectoryCardModel } from '../../models/directory-card.model';

@Component({
  selector: 'pg-directory-card',
  templateUrl: './directory-card.component.html',
  styleUrls: ['./directory-card.component.scss']
})
export class DirectoryCardComponent extends SideBarItemComponent<DirectoryCardModel> implements OnInit {

  ngOnInit(): void {
  }

}
