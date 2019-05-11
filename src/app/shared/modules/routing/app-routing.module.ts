import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { ReactiveFormsModule } from '@angular/forms';

import { MyItemsComponent } from '../../../my-items/my-items.component';
import { GiveSomethingComponent } from '../../../give-something/give-something.component';
import { TakeSomethingComponent } from '../../../take-something/take-something.component';
import { StatisticsComponent } from '../../../statistics/statistics.component';
import { PageNotFoundComponent } from '../../../page-not-found/page-not-found.component';
import { HomePageComponent } from '../../../home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'my-items', component: MyItemsComponent },
  { path: 'give-something', component: GiveSomethingComponent },
  { path: 'take-something', component: TakeSomethingComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    HomePageComponent,
    MyItemsComponent,
    GiveSomethingComponent,
    TakeSomethingComponent,
    StatisticsComponent,
    PageNotFoundComponent
  ],
  imports: [RouterModule.forRoot(routes), MaterialDesignModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
