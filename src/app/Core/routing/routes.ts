
import { Routes } from "@angular/router";
import { DashboardComponent } from "src/app/Budget/components/dashboard/dashboard.component";
import { SignInComponent } from "src/app/Common/components/sign-in/sign-in.component";
import { SignUpComponent } from "src/app/Common/components/sign-up/sign-up.component";
import { PiggyBankGuard } from "src/app/Pages/piggy-bank/guard/piggy-bank.guard";
import { SignInUpGuard } from "src/app/Pages/sign-in-up/guard/sign-in-up.guard";
import { PiggyBankComponent } from "../../Pages/piggy-bank/piggy-bank.component";
import { SignInUpComponent } from "../../Pages/sign-in-up/sign-in-up.component";

export const appRoutes: Routes = [
  {
    path: "",
    component: PiggyBankComponent,
    canActivate: [PiggyBankGuard],
    children: [
      { path: "", component: DashboardComponent },
    ]
  },
  {
    path: "account", component: SignInUpComponent,
    canActivate: [SignInUpGuard],
    children: [
      { path: "signin", component: SignInComponent },
      { path: "signup", component: SignUpComponent },
    ]
  }
]
