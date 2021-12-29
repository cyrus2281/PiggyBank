import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DirectoryCardComponent } from './components/directory-card/directory-card.component';
import { BudgetSidebarService } from './services/budget-sidebar.service';
import { BudgetComponent } from './components/budget/budget.component';
import { CommonComponentsModule } from '../Common/common.module';
import { ComponentsModule } from '../Components/components.module';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../Core/core.module';
import { AppRoutingModule } from '../Core/routes/app-routing.module';
import { DirectoryDataService } from './services/directory-data.service';
import { BudgetActionBarService } from './services/budget-action-bar.service';


@NgModule({
  declarations: [
    DashboardComponent,
    DirectoryCardComponent,
    BudgetComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    CommonComponentsModule,
    CoreModule,
    ComponentsModule,
    FormsModule,
  ],
  providers: [
    DirectoryDataService,
    BudgetSidebarService,
    {
        provide: 'SideBarServiceModel',
        useExisting: BudgetSidebarService
    },
    BudgetActionBarService,
    {
        provide: 'ActionBarServiceModel',
        useExisting: BudgetActionBarService
    },
  ],
  exports: [
    DashboardComponent,
    DirectoryCardComponent,
    BudgetComponent,
  ]
})
export class BudgetModule { }
