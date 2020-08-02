import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos adicionales
/**
 * @see https://valor-software.com/ng2-charts/#/DoughnutChart 
 */
import { ChartsModule } from 'ng2-charts';

import { IncrementadorComponent } from './incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { DonaComponent } from './dona/dona.component';



@NgModule({
  declarations: [IncrementadorComponent, DonaComponent],
  exports:[IncrementadorComponent, DonaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ]
})
export class ComponentsModule { }
