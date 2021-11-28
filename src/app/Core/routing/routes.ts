
import { Routes } from "@angular/router";
import { PiggyBankGuard } from "src/app/Pages/piggy-bank/guard/piggy-bank.guard";
import { SignInUpGuard } from "src/app/Pages/sign-in-up/guard/sign-in-up.guard";
import { SignInComponent } from "../../Common/sign-in/sign-in.component";
import { SignUpComponent } from "../../Common/sign-up/sign-up.component";
import { PiggyBankComponent } from "../../Pages/piggy-bank/piggy-bank.component";
import { SignInUpComponent } from "../../Pages/sign-in-up/sign-in-up.component";

export const appRoutes: Routes = [
  {
    path: "",
    component: PiggyBankComponent,
    canActivate: [PiggyBankGuard],
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
