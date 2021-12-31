import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "../Core/routes/app-routing.module";
import { CommonComponentsModule } from "../Common/common.module";
import { ComponentsModule } from "../Components/components.module";
import { CoreModule } from "../Core/core.module";
import { PiggyBankComponent } from "./piggy-bank/piggy-bank.component";
import { SignInUpComponent } from "./sign-in-up/sign-in-up.component";
import { FormsModule } from "@angular/forms";
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    PiggyBankComponent,
    SignInUpComponent,
    DisclaimerComponent,
    ContactComponent,
  ],
  imports: [
      CommonModule,
      AppRoutingModule,
      CommonComponentsModule,
      BrowserAnimationsModule,
      CoreModule,
      ComponentsModule,
      FormsModule,
  ],
  exports: [
    PiggyBankComponent,
    SignInUpComponent,
    DisclaimerComponent,
    ContactComponent,
  ]
})
export class PagesModule { }
