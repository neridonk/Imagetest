import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicComponent } from './topic.component';
import { PeopleComponent } from './people/people.component';
import { LandscapeComponent } from './landscape/landscape.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
    {
        path: 't', component: TopicComponent,

        children: [

            { path: 'landscape', component: LandscapeComponent },
            { path: 'people', component: PeopleComponent },
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
