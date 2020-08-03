import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  /**
   * importamos los modulos para unirlos
   */
  declarations: [
    BreadcrumsComponent,
    SidebarComponent,
    HeaderComponent
  ],
  /**
   * exportamos los mismos modulos para llamarlos en el pages.module
   * @see pages.module
   */
  exports:[
    BreadcrumsComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
