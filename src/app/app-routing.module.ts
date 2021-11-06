import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageComponent } from "./Common/page/page.component";
import { PiggyBankComponent } from "./Pages/piggy-bank/piggy-bank.component";
import { SignInUpComponent } from "./Pages/sign-in-up/sign-in-up.component";

const appRoutes : Routes = [
  {path:"", component: PiggyBankComponent},
  {path:"account", pathMatch: "full", component: SignInUpComponent, children:[
    {path:"login", component: PageComponent},
    {path:"signup", component: PageComponent},
  ]}
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule{}
