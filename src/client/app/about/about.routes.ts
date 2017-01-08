import { Route } from '@angular/router';
import { AboutComponent } from './index';

export const AboutRoutes: Route[] = [
  {
    path: 'about/:id',
    component: AboutComponent
  },
    { path: 'about',   redirectTo: '/overview', pathMatch: 'full' }

];
