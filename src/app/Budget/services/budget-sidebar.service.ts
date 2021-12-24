import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SideBarServiceModel } from 'src/app/Common/models/side-bar-service.model';
import { SubSink } from 'subsink';
import { DirectorySidebarCard } from '../models/directory-sidebar-card';
import { DirectoryDataService } from './directory-data.service';

@Injectable()
export class BudgetSidebarService
  implements SideBarServiceModel<DirectorySidebarCard>, OnDestroy
{
  private directorySidebarCards!: DirectorySidebarCard[];
  private directorySidebarCards$ = new BehaviorSubject<DirectorySidebarCard[]>(
    []
  );

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
                directory.totalOutcome
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

  selectSidebarItem(item: DirectorySidebarCard): void {
    console.log('Method not implemented.');
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
