import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MyarticlesComponent } from './myarticles.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: MyarticlesComponent,
  }
];

export const myArticlesRouting: ModuleWithProviders = RouterModule.forChild(routes);
