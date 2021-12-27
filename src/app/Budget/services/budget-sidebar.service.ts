import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SideBarActionEventEnum } from 'src/app/Common/enum/side-bar-action-event.enum';
import { SideBarServiceModel } from 'src/app/Common/models/side-bar-service.model';
import { SubSink } from 'subsink';
import { DirectorySidebarCard } from '../models/directory-sidebar-card';
import { DirectoryDataService } from './directory-data.service';

@Injectable()
export class BudgetSidebarService implements SideBarServiceModel<DirectorySidebarCard>, OnDestroy {

  private directorySidebarCards!: DirectorySidebarCard[];
  private directorySidebarCards$ = new BehaviorSubject<DirectorySidebarCard[]>([]);

  private selectedItem!: DirectorySidebarCard;
  private selectedItem$ = new BehaviorSubject<DirectorySidebarCard>(this.selectedItem);

  private subscriptions = new SubSink();

  constructor(private directoryDataService: DirectoryDataService) {
    this.subscriptions.add(
      this.directoryDataService.getDirectories().subscribe((directories) => {
        if (directories?.length > 0 || true) {
          this.directorySidebarCards = directories.map(
            (directory) =>
              new DirectorySidebarCard(
                directory.id,
                directory.name,
                directory.icon,
                directory.totalIncome,
                directory.totalExpense
              )
          );
          this.directorySidebarCards$.next(this.directorySidebarCards);
        }
      })
    );
  }

  getSidebarItems(): Observable<DirectorySidebarCard[]> {
    return this.directorySidebarCards$;
  }

  selectSidebarItem(item: DirectorySidebarCard, action: SideBarActionEventEnum): void {
    this.selectedItem = item;
    this.selectedItem$.next(this.selectedItem);
    console.log(item, action);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getSelectedSidebarItem(): Observable<DirectorySidebarCard> {
    return this.selectedItem$;
  }
}
