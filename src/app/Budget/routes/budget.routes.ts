import { Route } from "@angular/router";
import { BudgetComponent } from "../components/budget/budget.component";
import { DashboardComponent } from "../components/dashboard/dashboard.component";

export const budgetRouts: Route = {
  path: "budget",
  component: BudgetComponent,
  children: [
    {
      path: "dashboard",
      component: DashboardComponent
    },
    {
      path: "",
      redirectTo: "dashboard",
      pathMatch: 'full'
    }
  ]
}
