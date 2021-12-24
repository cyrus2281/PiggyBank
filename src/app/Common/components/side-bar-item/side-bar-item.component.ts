import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SideBarActionEventEnum } from '../../enum/side-bar-action-event.enum';
import { SideBarItemModel } from '../../models/side-bar-item.model';

@Component({
  selector: 'pg-side-bar-item',
  template: '',
})
export class SideBarItemComponent<T extends SideBarItemModel> {
  actionEvent = SideBarActionEventEnum;

  @Input() model!: T;
  @Input() active!: boolean;

  @Output() action = new EventEmitter<SideBarActionEventEnum>();

  constructor() { }

}
