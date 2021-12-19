import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { SideBarServiceInterface } from 'src/app/Common/models/side-bar-service.interface';
import { DirectoryCard } from '../models/directory-card';

@Injectable()
export class BudgetSidebarService implements SideBarServiceInterface<DirectoryCard> {

  constructor() { }
  getSidebarItems() {
    console.log('Method not implemented.');
    return of([new DirectoryCard('test one'), new DirectoryCard('test two'), new DirectoryCard('test three')]);
  }
  setSidebarItems(items: DirectoryCard[]): void {
    console.log('Method not implemented.');
  }
  selectSidebarItem(item: DirectoryCard): void {
    console.log('Method not implemented.');
  }
}
