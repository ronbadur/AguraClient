import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './shared/modules/routing/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from './shared/modules/material-design/material-design.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ItemService } from './shared/services/item/item.service';
import { ItemsTableComponent } from './items-table/items-table.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import {SideNavStatusService} from './shared/services/side-nav-status/side-nav-status.service';
import {HttpClientModule} from '@angular/common/http';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContactComponent } from './contact/contact.component';
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
