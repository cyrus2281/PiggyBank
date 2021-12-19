import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { SideBarServiceInterface } from 'src/app/Common/models/side-bar-service.interface';
import { DirectorySidebarCard } from '../models/directory-sidebar-card';

@Injectable()
export class BudgetSidebarService implements SideBarServiceInterface<DirectorySidebarCard> {

  constructor() { }
  getSidebarItems() {
    console.log('Method not implemented.');
    return of([new DirectorySidebarCard('test one'), new DirectorySidebarCard('test two'), new DirectorySidebarCard('test three')]);
  }
  setSidebarItems(items: DirectorySidebarCard[]): void {
    console.log('Method not implemented.');
  }
  selectSidebarItem(item: DirectorySidebarCard): void {
    console.log('Method not implemented.');
  }
}
