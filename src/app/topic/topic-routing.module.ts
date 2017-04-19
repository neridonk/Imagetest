import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicComponent } from './topic.component';
import { PeopleComponent } from './people/people.component';
import { LandscapeComponent } from './landscape/landscape.component';
import { OverviewComponent } from './overview/overview.component';
import { HallComponent } from './hall/hall.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
    {
        path: 't', component: TopicComponent,

        children: [
          { path: 'hall', component: HallComponent },
          { path: 'chisam', component: LandingPageComponent },
            { path: 'all', component: OverviewComponent }

        ]
    },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class TopicRoutingModule { }
