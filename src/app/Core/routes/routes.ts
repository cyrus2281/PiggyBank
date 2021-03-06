
import { Routes } from "@angular/router";
import { budgetRouts } from "src/app/Budget/routes/budget.routes";
import { SignInComponent } from "src/app/Common/components/sign-in/sign-in.component";
import { SignUpComponent } from "src/app/Common/components/sign-up/sign-up.component";
import { DisclaimerComponent } from "src/app/Pages/disclaimer/disclaimer.component";
import { PiggyBankGuard } from "src/app/Pages/piggy-bank/guard/piggy-bank.guard";
import { SignInUpGuard } from "src/app/Pages/sign-in-up/guard/sign-in-up.guard";
import { PiggyBankComponent } from "../../Pages/piggy-bank/piggy-bank.component";
import { SignInUpComponent } from "../../Pages/sign-in-up/sign-in-up.component";
import * as paths from 'src/app/Core/routes/app-routes';
import { ContactComponent } from "src/app/Pages/contact/contact.component";


export const appRoutes: Routes = [
  {
    path: "",
    component: PiggyBankComponent,
    canActivate: [PiggyBankGuard],
    children: [
      budgetRouts,
      {
        path: "",
        redirectTo: "budget",
        pathMatch: 'full'
      }
    ]
  },
  {
    path: "contact", component: ContactComponent
  },
  {
    path: "disclaimer/:disclaimer", component: DisclaimerComponent
  },
  {
    path: "account", component: SignInUpComponent,
    canActivate: [SignInUpGuard],
    children: [
      { path: "signin", component: SignInComponent, data: {page: 'isRight'}},
      { path: "signup", component: SignUpComponent, data: {page: 'isLeft'} },
    ]
  },
  {
    path: "**",
    redirectTo: "account/signin",
  }
]
