import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';

//Modullos
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';




@NgModule({
  /**
   * importamos los modulos para unirlos
   */
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent
  ],
  /**
   * exportamos los mismos modulos para llamarlos en el app.module
   * @see app.module.ts
   */
  exports:[
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent
  ],
  /**
   * @name SharedModule es un modulo que contiene más componentes
   * @name RouterModule necesario para llamar el <router-outlet> en el componente @name PagesComponent
   * @name ComponentsModule es un modulo que tiene los componentes para reusar
   */
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    ComponentsModule
  ]
})
export class PagesModule { }
