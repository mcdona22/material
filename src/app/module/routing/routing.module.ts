import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {WelcomePageComponent} from '../../comp/welcome-page/welcome-page.component';
import {PricesComponent} from '../../comp/prices/prices.component';
import {ScheduleComponent} from "../../comp/schedule/schedule.component";
import {AboutComponent} from "../../comp/about/about.component";


const ROUTES = [
  {path: 'home', pathMatch: 'full', component: WelcomePageComponent}
  , {path: 'prices', component : PricesComponent}
  // , {path: 'about', component : AboutComponent}
   , {path: 'schedule', component : ScheduleComponent}
  , {path: 'about', component : AboutComponent}
  , {path: '', redirectTo: 'home', pathMatch: 'full'}

]

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(ROUTES)]
  , exports: [RouterModule]
  , declarations: []
})
export class AppRoutingModule { }
