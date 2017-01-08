import { Route } from '@angular/router';
import { ProfileComponent } from './index';

export const profileRoutes: Route[] = [
  {
        path: 'profile/:id',
        component: ProfileComponent
  },
  { path: 'profile',   redirectTo: '/overview', pathMatch: 'full' }
];
