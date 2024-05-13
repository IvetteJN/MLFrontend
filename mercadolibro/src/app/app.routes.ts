import { Routes } from '@angular/router';
import { NuestraseleccionComponent } from './pages/nuestraseleccion/nuestraseleccion.component';

import { InicioComponent } from './pages/inicio/inicio.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component'; 

export const routes: Routes = [
    {path: 'nuestraseleccion',component:NuestraseleccionComponent},
    {path: 'inicio', title: 'Login', component:InicioComponent},
    {path: 'categoria', title: 'Categoria', component:CategoriaComponent},
    {path: 'dashboard', title: 'dashboard', component:DashboardComponent}
]

