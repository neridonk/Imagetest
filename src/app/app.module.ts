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
import { AboutComponent } from './about/about.component';
import { AddPictureComponent } from './add-picture/add-picture.component';
import { DashOverviewComponent } from './overview/overview.component';
import { CropperComponent } from './add-picture/cropper/cropper.component';
import { CropperDirective } from './add-picture/cropper/cropper.directive';
import { PickadateDirective } from './add-picture/pickadate.directive';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';
import { FormatDatePipe } from './about/format-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AboutComponent,
    AddPictureComponent,
    DashOverviewComponent,
    CropperComponent,
    CropperDirective,
    PickadateDirective,
    FormatDatePipe,

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
