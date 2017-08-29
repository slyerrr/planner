import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {LoginPageComponent} from './containers/login/login.page.component';
import {LayoutPageComponent} from './containers/layout/layout.page.component';


const routes: Routes = [

  {
    path: 'login',
    // component: LoginPageComponent,
    loadChildren: './containers/login/login.module#LoginModule'

    //  outlet: 'login',
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: './containers/layout/layout.module#LayoutModule',
  },

  // {
  //   path: '',
  //   component: LayoutComponent,
  //   children: [
  //     {
  //       path: 'dashboard',
  //       component: DashboardComponent,
  //     },
  //     {
  //       path: 'calendar',
  //       component: CalendarComponent,
  //     },
  //     {
  //       path: 'teamCall',
  //       component: TeamCallComponent,
  //     },
  //     {
  //       path: 'tasks',
  //       component: TasksComponent,
  //     },
  //     {
  //       path: 'projects',
  //       component: ProjectsComponent,
  //     },
  //     {
  //       path: 'profile',
  //       component: ProfileComponent,
  //     },
  //     {
  //       path: 'project',
  //       children: [
  //         {
  //           path: 'new',
  //           component: NewProjectComponent
  //         },
  //         {
  //           path: ':id',
  //           component: NewProjectComponent
  //         }
  //       ]
  //
  //     }
  //
  //   ]
  // },

  // {
  //   path: '',
  //   redirectTo: '/login',
  //   pathMatch: 'full',
  // },
  // {
  //   path: '',
  //   redirectTo: '/login',
  //   pathMatch: 'full',
  // },
  // {
  //   path: '**',
  //   component: LoginPageComponent,
  // },
];

export const routing = RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules});

export const IPAS_ROUTER_PROVIDERS = [];
