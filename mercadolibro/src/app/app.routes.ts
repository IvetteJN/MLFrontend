import { Routes } from '@angular/router';
import { NuestraseleccionComponent } from './pages/nuestraseleccion/nuestraseleccion.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { QuienesComponent } from './pages/quienes/quienes.component';
import { LandingComponent } from './pages/landing/landing.component';

import { InicioComponent } from './pages/inicio/inicio.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { DescripcionComponent } from './pages/nuestraseleccion/descripcion/descripcion.component';

export const routes: Routes = [
    {path: 'nuestraseleccion',component:NuestraseleccionComponent},
    {path: 'contacto',component:ContactoComponent},
    {path: 'quienes',component:QuienesComponent},
    {path: 'landing',component:LandingComponent},
    {path: 'descripcion', component:DescripcionComponent}
];
