import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';

import { OverviewComponent } from './topic/overview/overview.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { AddPictureComponent } from './add-picture/add-picture.component';
import { TopicModule } from './topic/topic.module';
import { ImagesPanelComponent } from './global/components/images-panel/images-panel.component';


const routes = [

  { path: '', redirectTo: '/t/chisam', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'addPicture', component: AddPictureComponent },

    {
    path: 'about/:id',
    component: AboutComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    TopicModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutesModule { }




