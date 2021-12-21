import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable} from 'rxjs';
import { AppState } from 'src/app/Data/Redux/root.reducer';
import { Directory } from '../models/directory';
import { DirectorySidebarCard } from '../models/directory-sidebar-card';
import { DirectoryModel } from '../models/directory.model';
import * as BudgetActions from '../store/budget.actions'
import { BUDGET_STORE } from '../store/budget.reducer';


@Injectable()
export class DirectoryDataService {
  private directories!: Directory[];
  private directories$ = new BehaviorSubject<Directory[]>([]);

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

}
