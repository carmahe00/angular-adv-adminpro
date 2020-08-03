import { Component, OnDestroy} from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrums',
  templateUrl: './breadcrums.component.html',
  styles: [
  ]
})
export class BreadcrumsComponent implements OnDestroy{

  titulo:string;
  titulosSubs$:Subscription;

  constructor( private router:Router) { 
    this.titulosSubs$ = this.getArgumetosRuta()
      .subscribe( ({titulo}) => {
        this.titulo = titulo;
        document.title = `AdminPro - ${titulo}`;
      });
  }
  ngOnDestroy(): void {
    this.titulosSubs$.unsubscribe();
  }


  /**
   * método obtiene la data del @see pages.routing
   * filtramos que sea una instancia de ActivationEnd
   * filtramos que el primer hijo de ruta se null, porque la ruta tiene hijos y padre (app.touting y app-routing.module)
   * transformamos los datos
   * asignamos el titulo ( data) a la variable titulo
   * asignamos el titulo ( data) al titulo del documento
   */
  getArgumetosRuta(){
    return this.router.events.
      pipe(
        filter( event => event instanceof ActivationEnd ),
        filter( (event: ActivationEnd) => event.snapshot.firstChild === null),
        map( (event:ActivationEnd) => event.snapshot.data)
      );
      
  }

}
