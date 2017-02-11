import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicComponent } from './topic.component';
import { FitnessComponent } from './fitness/fitness.component';

const routes: Routes = [
  {
    path: 't', component: TopicComponent,

    children: [

      { path: 'fit', component: FitnessComponent }

    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TopicRoutingModule { }
