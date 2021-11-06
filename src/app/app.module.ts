import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PiggyBankComponent } from './Pages/piggy-bank/piggy-bank.component';
import { NavbarComponent } from './Common/navbar/navbar.component';
import { PageComponent } from './Common/page/page.component';
import { ActionBarComponent } from './Common/action-bar/action-bar.component';
import { SideBarComponent } from './Common/side-bar/side-bar.component';
import { FooterComponent } from './Common/footer/footer.component';
import { HeaderComponent } from './Common/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { SignInUpComponent } from './Pages/sign-in-up/sign-in-up.component';

@NgModule({
  declarations: [
    AppComponent,
    PiggyBankComponent,
    NavbarComponent,
    PageComponent,
    ActionBarComponent,
    SideBarComponent,
    FooterComponent,
    HeaderComponent,
    SignInUpComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
