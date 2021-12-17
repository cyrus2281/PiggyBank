import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DirectoryCardComponent } from './components/directory-card/directory-card.component';



@NgModule({
  declarations: [
    DashboardComponent,
    DirectoryCardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardComponent,
    DirectoryCardComponent,
  ]
})
export class BudgetModule { }
