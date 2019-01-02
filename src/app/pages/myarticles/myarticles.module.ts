import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyarticlesComponent } from './myarticles.component';
import { myArticlesRouting } from './myarticles.routing';

@NgModule({
  imports: [
    CommonModule,
    myArticlesRouting,
  ],
  declarations: [
    MyarticlesComponent,
  ]
})
export class MyarticlesModule { }
