import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: '',
        //Eager Loading - El componente se importa de manera anticipada
        component: HomeComponent
    },
    /*{
        path: '',
        //Lazy Loading - El componente se importa cuando la ruta correspondiente es activada
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
    }*/
];
