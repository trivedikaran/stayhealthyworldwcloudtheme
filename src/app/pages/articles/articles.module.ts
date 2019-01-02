import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles.component';
import { articlesRouting } from './articles.routing';

@NgModule({
  imports: [
    CommonModule,
    articlesRouting,
  ],
  declarations: [
    ArticlesComponent,
  ]
})
export class ArticlesModule { }
