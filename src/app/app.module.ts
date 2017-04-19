import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AppComponent } from './app.component';

import { GlobalModule } from './global/global.module';
import { NameListService } from './global/services/name-list.service';

import { RoutesModule } from './app.routes';

import { FormsModule } from '@angular/forms';
import { HttpModule, Http} from '@angular/http';

import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { AddPictureComponent } from './add-picture/add-picture.component';
import { ProfileComponent } from './profile/profile.component';
import { DashOverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AboutComponent,
    AddPictureComponent,
    ProfileComponent,
    DashOverviewComponent,
  ],
  imports: [
    RoutesModule,
    GlobalModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [NavbarComponent],
  providers: [NameListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
