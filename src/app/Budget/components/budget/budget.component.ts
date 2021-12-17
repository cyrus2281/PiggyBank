import { Component, OnInit } from '@angular/core';
import APP_THEME from 'src/app/Core/theme/theme';
import { BudgetSidebarService } from '../../services/budget-sidebar.service';

@Component({
  selector: 'pg-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
})
export class BudgetComponent implements OnInit {
  app_theme = APP_THEME;

  constructor() { }

  ngOnInit(): void {
  }

}
