import { Routes, RouterModule } from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
import { Login } from './login';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', pathMatch: 'full',
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule',
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'fitnesswall', pathMatch: 'full' },
      { path: 'fitnesswall', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'dietcharts', loadChildren: './dietcharts/dietcharts.module#DietchartsModule' },
      { path: 'articles', loadChildren: './articles/articles.module#ArticlesModule' },
      { path: 'myarticles', loadChildren: './myarticles/myarticles.module#MyarticlesModule' },
      // { path: 'editors', loadChildren: './editors/editors.module#EditorsModule' },
      // { path: 'components', loadChildren: './components/components.module#ComponentsModule' },
      // { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
      // { path: 'ui', loadChildren: './ui/ui.module#UiModule' },
      // { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
      // { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
      // { path: 'maps', loadChildren: './maps/maps.module#MapsModule' },
      // { path: 'robots', loadChildren: './robots/robots.module#RobotsModule' },
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
