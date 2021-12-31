import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ComponentsModule } from "../Components/components.module";
import { CoreModule } from "../Core/core.module";
import { ActionBarComponent } from "./components/action-bar/action-bar.component";
import { HeaderComponent } from "./components/header/header.component";
import { MenuComponent } from "./components/menu/menu.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SideBarItemWrapperComponent } from './components/side-bar-item-wrapper/side-bar-item-wrapper.component';
import { SideBarComponent } from "./components/side-bar/side-bar.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { SideBarItemComponent } from './components/side-bar-item/side-bar-item.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { CookiesPolicyComponent } from './components/cookies-policy/cookies-policy.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsPolicyComponent } from './components/terms-policy/terms-policy.component';
import { RouterModule } from "@angular/router";
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ActionBarComponent,
    SideBarComponent,
    HeaderComponent,
    SignInComponent,
    SignUpComponent,
    MenuComponent,
    SideBarItemWrapperComponent,
    SideBarItemComponent,
    DialogComponent,
    CookiesPolicyComponent,
    PrivacyPolicyComponent,
    TermsPolicyComponent,
    ContactFormComponent,
  ],
  imports: [
      CommonModule,
      ComponentsModule,
      CoreModule,
      FormsModule,
      ComponentsModule,
      RouterModule
  ],
  exports: [
    NavbarComponent,
    ActionBarComponent,
    SideBarComponent,
    HeaderComponent,
    SignInComponent,
    SignUpComponent,
    MenuComponent,
    SideBarItemWrapperComponent,
    SideBarItemComponent,
    DialogComponent,
    CookiesPolicyComponent,
    PrivacyPolicyComponent,
    TermsPolicyComponent,
    ContactFormComponent,
  ]
})
export class CommonComponentsModule { }
