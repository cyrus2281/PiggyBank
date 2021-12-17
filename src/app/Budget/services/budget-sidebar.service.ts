import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { SideBarServiceInterface } from 'src/app/Common/models/side-bar.service.interface';
import { DirectoryCardModel } from '../models/directory-card.model';

@Injectable()
export class BudgetSidebarService implements SideBarServiceInterface<DirectoryCardModel> {

  constructor() { }
  getSidebarItems() {
    console.log('Method not implemented.');
    return of([new DirectoryCardModel('test one'), new DirectoryCardModel('test two'), new DirectoryCardModel('test three')]);
  }
  setSidebarItems(items: DirectoryCardModel[]): void {
    console.log('Method not implemented.');
  }
  selectSidebarItem(item: DirectoryCardModel): void {
    console.log('Method not implemented.');
  }
}
