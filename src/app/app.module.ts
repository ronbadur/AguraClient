import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './shared/modules/routing/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from './shared/modules/material-design/material-design.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ItemService } from './shared/services/item/item.service';
import { ItemsMock } from './shared/data/ItemsMock';
import { ItemsTableComponent } from './items-table/items-table.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [ItemService, ItemsMock],
  bootstrap: [AppComponent]
})
export class AppModule { }
