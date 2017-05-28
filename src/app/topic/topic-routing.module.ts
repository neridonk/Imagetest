import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicComponent } from './topic.component';
import { OverviewComponent } from './overview/overview.component';

import { HallComponent } from './hall/hall.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BlogComponent } from './blog/blog.component';
import { ProfileComponent } from './profile/profile.component';
import { MotivatorMapComponent } from './motivator-map/motivator-map.component';
import { AgmCoreModule } from 'angular2-google-maps/core';

const routes: Routes = [
    {
        path: 't', component: TopicComponent,

        children: [
          { path: 'map', component: MotivatorMapComponent },
          { path: 'read', component: BlogComponent },
          { path: 'hall', component: HallComponent },
          { path: 'chisam', component: LandingPageComponent },
            { path: 'all', component: OverviewComponent },
              { path: 'profile/:id', component: ProfileComponent }
        ]
    },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class TopicRoutingModule { }
