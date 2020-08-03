import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * servicio para lamacenar los colores 
 */
export class SettingsService {

  /**
   * @param linkTheme en el link del tema, esta en el index.html
   */
  private linkTheme = document.querySelector('#theme');

  constructor() {
    //En caso de existir un tema lo asiganmos a la constante url de lo contrario será estatico
    const url = localStorage.getItem('theme') || `./assets/css/colors/default-dark.css`;
    //Asignamos la ruta al link del tema
    this.linkTheme.setAttribute('href', url);
   }

   /**
   * método para cambiar el tema.
   * creamos una contante con la ruta del tema
   * Asignamos la ruta al link del tema
   * Almacenamos el tema en el localStorage
   * @param theme recibe el nombre del tema que deseamos cambiar
   */
  changeTheme(theme:string){
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }

  /**
   * Método para agregar la clase working(check)
   * recorremos la lista de los botones con la clase .selector
   * con el listado de clases eliminamos la clase working
   * creamos una constante,que tiene el valor del boton data-theme
   * creamos una constatnte, que contiene el valor del href en del tema principal
   * si coiciden asinamos a este boton la clase working
   */
  checkCurrentTheme(){
    const links = document.querySelectorAll('.selector');
    links.forEach(elem => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme.getAttribute('href');
      if(btnThemeUrl === currentTheme){
        elem.classList.add('working')
      }
    })
  }
}
