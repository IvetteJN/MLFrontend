import { Routes } from '@angular/router';
import { NuestraseleccionComponent } from './pages/nuestraseleccion/nuestraseleccion.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { QuienesComponent } from './pages/quienes/quienes.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CategoriaComponent } from './pages/nuestraseleccion/categoria/categoria.component';
import { LandingComponent } from './pages/landing/landing.component';
import { DescripcionComponent } from './pages/nuestraseleccion/descripcion/descripcion.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductoComponent } from './pages/nuestraseleccion/producto/producto.component';

export const routes: Routes = [
    {path: 'nuestraseleccion',component:NuestraseleccionComponent},
    {path: 'inicio', title: 'Login', component:InicioComponent}

]
