import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicRoutingModule } from './topic-routing.module';
import { TopicComponent } from './topic.component';
import { PeopleComponent } from './people/people.component';
import { GlobalModule } from '../global/global.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { OverviewComponent } from './overview/overview.component';
import { LandscapeComponent } from './landscape/landscape.component';
import { HallComponent } from './hall/hall.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    GlobalModule,
    CommonModule,
    TopicRoutingModule
  ],
  declarations: [TopicComponent, LandingPageComponent, PeopleComponent, OverviewComponent, LandscapeComponent, HallComponent]
})
export class TopicModule { }
