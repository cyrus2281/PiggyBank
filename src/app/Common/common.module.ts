import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppModule } from "../app.module";
import { ComponentsModule } from "../Components/components.module";
import { CoreModule } from "../Core/core.module";
import { ActionBarComponent } from "./action-bar/action-bar.component";
import { HeaderComponent } from "./header/header.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SideBarComponent } from "./side-bar/side-bar.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { FormsModule } from "@angular/forms";
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ActionBarComponent,
    SideBarComponent,
    HeaderComponent,
    SignInComponent,
    SignUpComponent,
    MenuComponent,
  ],
  imports: [
      CommonModule,
      ComponentsModule,
      CoreModule,
      FormsModule,
      ComponentsModule
  ],
  exports: [
    NavbarComponent,
    ActionBarComponent,
    SideBarComponent,
    HeaderComponent,
    SignInComponent,
    SignUpComponent,
    MenuComponent,
  ]
})
export class CommonComponentsModule { }
