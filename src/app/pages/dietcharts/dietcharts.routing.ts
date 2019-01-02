import { Routes, RouterModule }  from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DietchartsComponent } from './dietcharts.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: DietchartsComponent,
  }
];

export const dietChartsRouting: ModuleWithProviders = RouterModule.forChild(routes);
