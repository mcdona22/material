import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import {HttpModule, Http} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './module/routing/routing.module';
import { NavbarComponent } from './comp/navbar/navbar.component';
import { LeaderComponent } from './comp/leader/leader.component';
import { ImgCardComponent } from './comp/img-card/img-card.component';
import { WelcomePageComponent } from './comp/welcome-page/welcome-page.component';
import { PricesComponent } from './comp/prices/prices.component';
import { PriceComponent } from './comp/price/price.component';
import { ScheduleComponent } from './comp/schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeaderComponent,
    ImgCardComponent,
    WelcomePageComponent,
    PricesComponent,
    PriceComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
