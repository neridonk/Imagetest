import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicRoutingModule } from './topic-routing.module';
import { TopicComponent } from './topic.component';
import { GlobalModule } from '../global/global.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { OverviewComponent } from './overview/overview.component';

import { HallComponent } from './hall/hall.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BlogComponent } from './blog/blog.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    GlobalModule,
    CommonModule,
    TopicRoutingModule
  ],
  declarations: [EditProfileComponent, OverviewComponent, ProfileComponent, TopicComponent, LandingPageComponent, HallComponent, BlogComponent]
})
export class TopicModule { }
