import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";
import { CommonComponentsModule } from "../Common/common.module";
import { ComponentsModule } from "../Components/components.module";
import { CoreModule } from "../Core/core.module";
import { PiggyBankComponent } from "./piggy-bank/piggy-bank.component";
import { SignInUpComponent } from "./sign-in-up/sign-in-up.component";

@NgModule({
  declarations: [
    PiggyBankComponent,
    SignInUpComponent,
  ],
  imports: [
      CommonModule,
      AppRoutingModule,
      CommonComponentsModule,
      CoreModule
  ],
  exports: [
    PiggyBankComponent,
    SignInUpComponent,
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    CommonComponentsModule,
  ]
})
export class PagesModule { }
