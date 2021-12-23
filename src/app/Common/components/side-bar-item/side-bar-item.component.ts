import { Component, Input, OnInit } from '@angular/core';
import { SideBarItemModel } from '../../models/side-bar-item.model';

@Component({
  selector: 'pg-side-bar-item',
  template: '',
})
export class SideBarItemComponent<T extends SideBarItemModel> {

  @Input() model!: T;

  constructor() { }

}
