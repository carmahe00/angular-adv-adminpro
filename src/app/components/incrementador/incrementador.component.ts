import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent  implements OnInit{
  

  /**
   * @param progreso recibe una propiedad desde el padre
   */
  @Input('valor') progreso: number = 40;
  @Input() btnClass: string ='btn-primary';

  /**
   * @property @Output se maneja con un EventEmitter
   * @param valorSalida envia el valor hacia el padre 
   */
  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();

  /**
   * @name ngOnInit método sólo se ejecuta una vez
   */
  ngOnInit(){
    this.btnClass = `btn ${this.btnClass}`;
  }

  /**
   * método para cambiar el valor del progreso, así mismo cambiar la barra
   * @param valor es el valor que se envía desde la página
   */
  cambiarValor(valor:number){
    if(this.progreso >= 100 && valor >= 0){
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }
    if(this.progreso <= 0 && valor < 0){
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }
    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);
  }

  onChange(nuevoValor:number){
    if(nuevoValor >= 100){
      this.progreso =100;
    }else if(nuevoValor <= 0){
      this.progreso = 0;
    }else{
      this.progreso = nuevoValor
    }
    this.valorSalida.emit(this.progreso);
  }
}
