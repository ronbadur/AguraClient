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
import { ItemFormComponent } from 'src/app/item-form/item-form.component';
import { UpdateItemDialogComponent } from 'src/app/update-item-dialog/update-item-dialog.component';
import { CommonModule } from '@angular/common';
import { ItemsTableComponent } from 'src/app/items-table/items-table.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { PieChartComponent } from 'src/app/pie-chart/pie-chart.component';

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
    ItemFormComponent,
    PageNotFoundComponent,
    UpdateItemDialogComponent,
    ItemsTableComponent,
    PieChartComponent
  ],
  entryComponents: [UpdateItemDialogComponent],
  imports: [RouterModule.forRoot(routes), MaterialDesignModule, ReactiveFormsModule, CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
