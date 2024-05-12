import { Routes } from '@angular/router';
import { NuestraseleccionComponent } from './pages/nuestraseleccion/nuestraseleccion.component';

import { InicioComponent } from './pages/inicio/inicio.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';

export const routes: Routes = [
    {path: 'nuestraseleccion',component:NuestraseleccionComponent},
    {path: 'inicio', title: 'Login', component:InicioComponent},
    {path: 'categoria', title: 'Categoria', component:CategoriaComponent}
]

