import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../Core/routing/app-routing.module";
import { CommonComponentsModule } from "../Common/common.module";
import { ComponentsModule } from "../Components/components.module";
import { CoreModule } from "../Core/core.module";
import { PiggyBankComponent } from "./piggy-bank/piggy-bank.component";
import { SignInUpComponent } from "./sign-in-up/sign-in-up.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    PiggyBankComponent,
    SignInUpComponent,
  ],
  imports: [
      CommonModule,
      AppRoutingModule,
      CommonComponentsModule,
      CoreModule,
      ComponentsModule,
      FormsModule,
  ],
  exports: [
    PiggyBankComponent,
    SignInUpComponent,
  ]
})
export class PagesModule { }
