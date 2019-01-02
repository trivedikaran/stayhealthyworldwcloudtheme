import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ArticlesComponent } from './articles.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: ArticlesComponent,
  }
];

export const articlesRouting: ModuleWithProviders = RouterModule.forChild(routes);
