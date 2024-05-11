import { Routes } from '@angular/router';
import { NuestraseleccionComponent } from './pages/nuestraseleccion/nuestraseleccion.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { QuienesComponent } from './pages/quienes/quienes.component';
import { LandingComponent } from './pages/landing/landing.component';

import { InicioComponent } from './pages/inicio/inicio.component';

export const routes: Routes = [
    {path: 'nuestraseleccion',component:NuestraseleccionComponent},
    {path: 'contacto',component:ContactoComponent},
    {path: 'quienes',component:QuienesComponent},
    {path: 'landing',component:LandingComponent},
];
