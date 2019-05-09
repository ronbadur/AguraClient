import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyItemsComponent } from './my-items/my-items.component';
import { GiveSomethingComponent } from './give-something/give-something.component';
import { TakeSomethingComponent } from './take-something/take-something.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: MyItemsComponent },
  { path: 'my-items', component: MyItemsComponent },
  { path: 'give-something', component: GiveSomethingComponent },
  { path: 'take-something', component: TakeSomethingComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyItemsComponent,
    GiveSomethingComponent,
    TakeSomethingComponent,
    StatisticsComponent,
    PageNotFoundComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
