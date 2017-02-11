import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';

import { OverviewComponent } from './overview/overview.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { AddPictureComponent } from './add-picture/add-picture.component';


const routes = [
  { path: '', component: OverviewComponent },
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
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutesModule { }




