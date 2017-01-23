import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import { LoginRoutes } from './login/index';
import { OverviewRoutes } from './overview/index';
import { profileRoutes } from './profile/index';

export const routes: Routes = [
  ...OverviewRoutes,
  ...LoginRoutes,
  ...HomeRoutes,
  ...AboutRoutes,
  ...profileRoutes
];
