import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { MyItemsComponent } from '../../../my-items/my-items.component';
import { GiveSomethingComponent } from '../../../give-something/give-something.component';
import { TakeSomethingComponent } from '../../../take-something/take-something.component';
import { StatisticsComponent } from '../../../statistics/statistics.component';
import { PageNotFoundComponent } from '../../../page-not-found/page-not-found.component';
import { HomePageComponent } from '../../../home-page/home-page.component';
import { ItemFormComponent } from '../../forms/item-form/item-form.component';
import { UpdateItemDialogComponent } from 'src/app/update-item-dialog/update-item-dialog.component';
import { CommonModule } from '@angular/common';
import { ItemsTableComponent } from 'src/app/items-table/items-table.component';
import { PieChartComponent } from '../../../statistics/pie-chart/pie-chart.component';
import { LoginComponent } from '../../../login/login.component';
import {SignUpComponent} from '../../../sign-up/sign-up.component';
import {ContactComponent} from '../../../contact/contact.component';
import {GooglePlaceModule} from 'ngx-google-places-autocomplete';
import {MessageComponent} from '../../../message/message.component';
import {CreateMessageDialogComponent} from '../../../create-message-dialog/create-message-dialog.component';
import { LogoComponent } from  '../../../logo/logo.component';
import { SystemStatsComponent } from 'src/app/system-stats/system-stats.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'my-items', component: MyItemsComponent },
  { path: 'give-something', component: GiveSomethingComponent },
  { path: 'take-something', component: TakeSomethingComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'system-stats', component: SystemStatsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'messages', component: MessageComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    HomePageComponent,
    LoginComponent,
    SignUpComponent,
    MyItemsComponent,
    GiveSomethingComponent,
    TakeSomethingComponent,
    StatisticsComponent,
    ItemFormComponent,
    PageNotFoundComponent,
    UpdateItemDialogComponent,
    ItemsTableComponent,
    PieChartComponent,
    LogoComponent,
    MessageComponent,
    CreateMessageDialogComponent,
    SystemStatsComponent
  ],
  entryComponents: [UpdateItemDialogComponent, CreateMessageDialogComponent],
  imports: [RouterModule.forRoot(routes), MaterialDesignModule, ReactiveFormsModule, CommonModule, FormsModule, GooglePlaceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
