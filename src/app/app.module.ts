import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './Components/components.module';
import { CommonComponentsModule } from './Common/common.module';
import { PagesModule } from './Pages/pages.module';
import { CoreModule } from './Core/core.module';
import { TransactionModule } from './Transaction/transaction.module';
import { DirectoryModule } from './Directory/directory.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    ComponentsModule,
    CommonComponentsModule,
    PagesModule,
    CoreModule,
    TransactionModule,
    DirectoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
