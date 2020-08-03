import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesa',
  templateUrl: './promesa.component.html',
  styles: [
  ]
})
/**
 * manejos de promesas
 */
export class PromesaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /**
     * 
     */
    this.getUsuarios().then(usuarios => {
      console.log(usuarios);
    });

    /**
     * @name resolve cuando la promesa funcione
     * @name reject cuando la promesa falle
     */
    const promesa = new Promise((resolve, reject)=>{
      if(false){
        resolve('Hola mundo');
      }else{
        reject('Algo salio mal')
      }
        
    });

    /**
     * @method then activa cuando la promesa se resuelve (resolve)
     * @method catch activa cuando la promesa se rechaza (reject)
     */
    promesa
      .then((mensaje)=>{
        console.log(mensaje);
      })
      .catch( error => console.log('Error en mi promesa',error));
    
    console.log('Fin del Init');
  }

  /**
   * método que retorna una promesa con los usuarios
   * @method fecth infica la dirección url
   * @method then transforma la respuesta en json (resp.json())
   * @method resolve pasamos los datos a la promesa (resolve(body.data))
   */
  getUsuarios(){
    return new Promise(resolve =>{
      fetch('https://reqres.in/api/users')
        .then( resp => resp.json())
        .then( body => resolve(body.data))
    });
  }

}
