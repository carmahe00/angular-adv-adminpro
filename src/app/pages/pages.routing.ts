import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesaComponent } from './promesa/promesa.component';
import { RxjsComponent } from './rxjs/rxjs.component';

/**
 * @param routes almacena las rutas
 * la ruta dashboard contiene rutas hijas @example '/dashboard/progress'
 * cada ruta tiene data que contiene un objeto con el titulo
 */
const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent, data:{titulo:'Dashboard'} },
            { path: 'progress', component: ProgressComponent, data:{titulo:'Progress'} },
            { path: 'grafica1', component: Grafica1Component, data:{titulo:'Gráfica #1'} },
            { path: 'account-settings', component: AccountSettingsComponent, data:{titulo:'Ajustes de Cuenta'} },
            { path: 'promesas', component: PromesaComponent, data:{titulo:'Promesas'} },
            { path: 'rxjs', component: RxjsComponent, data:{titulo:'RxJs'} }
        ]
    },
];
/**
 * @name RouterModule.forChild(routes) indica que contiene rutas hijas
 */
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
