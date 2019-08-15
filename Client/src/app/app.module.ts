import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './shared/modules/routing/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from './shared/modules/material-design/material-design.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ItemService } from './shared/services/item/item.service';
import { FooterComponent } from './footer/footer.component';
import {SideNavStatusService} from './shared/services/side-nav-status/side-nav-status.service';
import {HttpClientModule} from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { CreateMessageDialogComponent } from './create-message-dialog/create-message-dialog.component';
import { SystemStatsComponent } from './system-stats/system-stats.component';
// import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [ItemService, SideNavStatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
