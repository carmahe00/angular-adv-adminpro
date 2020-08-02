import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent {

  /**
   * @param progreso1 valor asignado al ancho de la barra con la clase primary
   */
  progreso1: number = 25;
  /**
   * @param progreso2 valor asignado al ancho de la barra con la clase info
   */
  progreso2: number = 35;

  get getProgreso1(){
    return `${this.progreso1}%`;
  }

  get getProgreso2(){
    return `${this.progreso2}%`;
  }

}
