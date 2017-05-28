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
import { MotivatorMapComponent } from './motivator-map/motivator-map.component';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    GlobalModule,
    CommonModule,
    TopicRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCNaub-76zQdF46veUDJ3EUsBbyqUgL1is'
    })
  ],
  declarations: [EditProfileComponent, OverviewComponent, ProfileComponent, TopicComponent, LandingPageComponent, HallComponent, BlogComponent, MotivatorMapComponent]
})
export class TopicModule { }
