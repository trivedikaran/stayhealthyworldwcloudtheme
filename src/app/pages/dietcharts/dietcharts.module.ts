import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTranslationModule } from 'app/app.translation.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgaModule } from 'app/theme/nga.module';
import { dietChartsRouting } from './dietcharts.routing';
import { DietchartsComponent } from './dietcharts.component';


@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    dietChartsRouting,
  ],
  declarations: [
    DietchartsComponent,
  ]
})
export class DietchartsModule { }
