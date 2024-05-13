import { Routes } from '@angular/router';
import { NuestraseleccionComponent } from './pages/nuestraseleccion/nuestraseleccion.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { QuienesComponent } from './pages/quienes/quienes.component';
import { LandingComponent } from './pages/landing/landing.component';

import { InicioComponent } from './pages/inicio/inicio.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';

export const routes: Routes = [
    { path: 'nuestraseleccion', component: NuestraseleccionComponent },
    { path: 'categoria', title: 'Categoria', component: CategoriaComponent },
    { path: 'inicio', title: 'Inicio', component: InicioComponent }
];
