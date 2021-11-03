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

@NgModule({
  declarations: [
    AppComponent,
    PiggyBankComponent,
    NavbarComponent,
    PageComponent,
    ActionBarComponent,
    SideBarComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
