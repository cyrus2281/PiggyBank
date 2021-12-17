import { Component, Input, OnInit } from '@angular/core';
import { SideBarItemModelInterface } from '../../models/side-bar-item.model';

@Component({
  selector: 'pg-side-bar-item',
  template: '',
})
export class SideBarItemComponent<T extends SideBarItemModelInterface> {

  @Input() model!: T;

  constructor() { }

}
