import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppState } from 'src/app/Data/Redux/root.reducer';
import { Directory } from '../models/directory';
import { DirectoryModel } from '../models/directory.model';
import * as BudgetActions from '../store/budget.actions'
import { BUDGET_STORE } from '../store/budget.reducer';


@Injectable()
export class DirectoryDataService {
  private directories!: Directory[];
  private directories$ = new BehaviorSubject<Directory[]>([]);

  private selectedDirectory!: Directory;
  private selectedDirectory$ = new BehaviorSubject<Directory>(this.selectedDirectory);

  constructor(private store: Store<AppState>) {
    this.store.select(BUDGET_STORE).subscribe(budgetState => {
      this.directories = budgetState.directories;
      this.updateDirectoriesSidebar(this.directories);
      this.directories$.next(this.directories);
    })
  }

  createDirectory(newDirectory: DirectoryModel) {
    this.store.dispatch(new BudgetActions.CreateDirectory(newDirectory));
  }

  getDirectories(): Observable<Directory[]> {
    return this.directories$;
  }

  updateDirectoriesSidebar(directories: Directory[]): void {

  }

  getSelectedDirectory(): Observable<Directory> {
    return this.selectedDirectory$;
  }

  setSelectedDirectory(directory: Directory): void {
    this.selectedDirectory = directory;
    this.selectedDirectory$.next(this.selectedDirectory);
  }

  setSelectedDirectoryFromID(directoryID: string): boolean {
    const directory = this.directories.find(directory => directory.id === directoryID);

    if (directory) {
      this.setSelectedDirectory(directory);
      return true;
    } else {
      return false;
    }
  }


}
