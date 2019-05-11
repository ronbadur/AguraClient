import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './shared/modules/routing/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from './shared/modules/material-design/material-design.module';
import { ItemService } from './shared/services/item/item.service';
import { ItemsMock } from './shared/data/ItemsMock';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule
  ],
  providers: [ItemService, ItemsMock],
  bootstrap: [AppComponent]
})
export class AppModule { }
