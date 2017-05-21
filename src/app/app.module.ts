import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { GlobalModule } from './global/global.module';
import { NameListService } from './global/services/name-list.service';

import { RoutesModule } from './app.routes';

import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';

import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FacebookService } from './login/facebook.service';
import { AddPictureComponent } from './add-picture/add-picture.component';
import { DashOverviewComponent } from './overview/overview.component';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AddPictureComponent,
    DashOverviewComponent

  ],
  imports: [
    RoutesModule,
    GlobalModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [NavbarComponent],
  providers: [NameListService, Location, FacebookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
