import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { SharedModule } from '../shared/shared.module';

import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';




@NgModule({
  /**
   * importamos los modulos para unirlos
   */
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent
  ],
  /**
   * exportamos los mismos modulos para llamarlos en el app.module
   * @see app.module.ts
   */
  exports:[
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent
  ],
  /**
   * @name SharedModule es un modulo que contiene más componentes
   * @name RouterModule necesario para llamar el <router-outlet> en el componente @name PagesComponent
   */
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
