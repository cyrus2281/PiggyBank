import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ActionBarComponent } from "./action-bar/action-bar.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SideBarComponent } from "./side-bar/side-bar.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

@NgModule({
  declarations: [
    NavbarComponent,
    ActionBarComponent,
    SideBarComponent,
    FooterComponent,
    HeaderComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
      CommonModule
  ],
  exports: [
    NavbarComponent,
    ActionBarComponent,
    SideBarComponent,
    FooterComponent,
    HeaderComponent,
    SignInComponent,
    SignUpComponent,
  ]
})
export class CommonComponentsModule { }
