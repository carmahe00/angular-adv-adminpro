import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  intervalSubs:Subscription;

  /**
   * nos subscribimos al observable
   * @method pipe transforma datos , pero también lo usamos para reintentar correr el observable una vez
   * imprimimos el valor emitido por el observable
   * imprimimos el error emitido por el observable
   * cuando se haya completado imprimimos un mensaje
   */
  constructor() { 
    /*
    this.retornaObservable().pipe(
      retry(2)
    ).subscribe(
      error => console.warn('Error',error),
      ()=> console.info('Obs terminado')
      valor => console.log(valor),
    );*/
    this.intervalSubs = this.retornaIntervalo().subscribe( console.log )
  }
  /**
   * @method ngOnDestroy se activa cuando pasamos a tro componente
   * @method unsubscribe elimina la subscripción ppara uqe no siga ejecutando
   */
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  /**
   * método retorna un intervalo que es observable cada medio segundo
   * @method pipe transforma los datos
   * @method take obtenemos sólo 10
   * @method map transforma los datos sumandole 1
   * @method filter sólo se obtiene los números pares
   */
  retornaIntervalo(): Observable<number>{
    return interval(500)
      .pipe(
        take(10),
        map( valor => valor + 1),
        filter(valor => (valor % 2 == 0)? true : false )
      )
  }
  
  /**
   * método devulve un Observable que emite un número
   * creamos un observable
   * declaramos un variable setInterval()
   * emitimos la variable i con el observable
   * cuando sea igual a 4 terminamos el setInterval; además terminamos el observable
   * cuando sea igual a 2 emitimos un error
   * se ejecuta cada 1 segundo
   */
  retornaObservable(): Observable<number>{
    let i = -1;
    return new Observable<number>( observer => {
      const intervalo = setInterval(()=>{
        i++;
        observer.next(i);
        if(i===4){
          clearInterval(intervalo);
          observer.complete();
        }
        if( i === 2 ){
          observer.error('i llego al valor 2');
        }
      }, 1000)
    });
  }
}
