import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './Core/routing/app-routing.module';
import { ComponentsModule } from './Components/components.module';
import { CommonComponentsModule } from './Common/common.module';
import { PagesModule } from './Pages/pages.module';
import { CoreModule } from './Core/core.module';
import { TransactionModule } from './Transaction/transaction.module';
import { DirectoryModule } from './Directory/directory.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { effects, reducers } from './Data/Redux/root.reducer';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ComponentsModule,
    CommonComponentsModule,
    PagesModule,
    CoreModule,
    TransactionModule,
    DirectoryModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
