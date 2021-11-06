import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignInComponent } from "./Common/sign-in/sign-in.component";
import { SignUpComponent } from "./Common/sign-up/sign-up.component";
import { PiggyBankComponent } from "./Pages/piggy-bank/piggy-bank.component";
import { SignInUpComponent } from "./Pages/sign-in-up/sign-in-up.component";

const appRoutes: Routes = [
  { path: "", component: PiggyBankComponent },
  {
    path: "account", component: SignInUpComponent, children: [
      { path: "signin", component: SignInComponent },
      { path: "signup", component: SignUpComponent },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
