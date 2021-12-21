import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { SideBarServiceInterface } from 'src/app/Common/models/side-bar-service.interface';
import { SubSink } from 'subsink';
import { DirectorySidebarCard } from '../models/directory-sidebar-card';
import { DirectoryDataService } from './directory-data.service';

@Injectable()
export class BudgetSidebarService implements SideBarServiceInterface<DirectorySidebarCard>, OnDestroy {
  private directorySidebarCards!: DirectorySidebarCard[];
  private directorySidebarCards$ = new BehaviorSubject<DirectorySidebarCard[]>([]);

  private subscriptions = new SubSink();

  constructor(private directoryDataService: DirectoryDataService) {
    this.subscriptions.add(this.directoryDataService.getDirectories().subscribe(directories => {
      if (directories?.length > 0) {
        this.directorySidebarCards = directories.map(directory => new DirectorySidebarCard(directory.name))
        this.directorySidebarCards$.next(this.directorySidebarCards);
      }
    }));
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
