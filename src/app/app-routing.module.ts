import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

//Modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';

/**
 * @param routes almacena las rutas, hay rutas hijas y se llaman de nuevo con <router-outlet>
 */
const routes: Routes = [

  // path: '/dashboard' PagesRouting
  // path: '/auth' AuthRouting
  // path: '/medicos' MedicosRouting
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path:'**', component: NopagefoundComponent}
]

/**
 * @name PagesRoutingModule contiene las rutas hijas (dashboard, progress y grafica1)
 */
@NgModule({
  imports: [ 
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
