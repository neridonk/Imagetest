import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AppComponent } from './app.component';

import { GlobalModule } from './global/global.module';
import { NameListService } from './global/services/name-list.service';

import { RoutesModule } from './app.routes';

import { FormsModule } from '@angular/forms';
import { HttpModule, Http} from '@angular/http';
import { OverviewComponent } from './overview/overview.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { AddPictureComponent } from './add-picture/add-picture.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    NavbarComponent,
    LoginComponent,
    AboutComponent,
    AddPictureComponent,
    ProfileComponent,
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
