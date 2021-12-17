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
