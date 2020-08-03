import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * Servicio mostrar el nombre de listas y link
 */
export class SidebarService {

  /**
   * @param menu  almacena los nombre y rutas del sidebar
   */
  manu:any[]=[
    {
      titulo:'Dashboard!!!',
      icono:'mdi mdi-gauge',
      submenu:[
        {titulo:'Main', url:'/'},
        {titulo:'ProgressBar', url:'progress'},
        {titulo:'Gráfia', url:'grafica1'},
      ]
    }
  ];

  constructor() { }
}
