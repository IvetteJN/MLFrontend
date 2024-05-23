import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { QuienesComponent } from './pages/quienes/quienes.component';

import { NuestraseleccionComponent } from './pages/nuestraseleccion/nuestraseleccion.component';
import { DescripcionComponent } from './pages/nuestraseleccion/descripcion/descripcion.component';

import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DatospersonalesComponent } from './pages/dashboard/datospersonales/datospersonales.component';
import { HistorialComprasComponent } from './pages/dashboard/historial-compras/historial-compras.component';
import { OrderStatusComponent } from './pages/dashboard/status/status.component';
import { CalificacionesComponent } from './pages/dashboard/calificaciones/calificaciones.component';

export const routes: Routes = [
    { path: 'landing', title: 'Home', component: LandingComponent },
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'quienes', title: 'Quienes Somos', component: QuienesComponent },
    {
        path: 'nuestraseleccion', title: 'Nuestra Selección', component: NuestraseleccionComponent,
        children: [
            { path: '', title: '', component: DescripcionComponent }
        ]
    },
    { path: 'contacto', title: 'Contacto', component: ContactoComponent },
    { path: 'inicio', title: 'Login', component: InicioComponent },
    {
        path: 'dashboard', title: 'Mi perfil', component: DashboardComponent,
        children: [
            { path: 'editarDatosPersonales', component: DatospersonalesComponent, title: 'Editar datos personales' },

            { path: 'historialcompras', component: HistorialComprasComponent, title: 'Mis Compras' },
            { path: 'statusC', component: OrderStatusComponent, title: 'Estado de mi compra' },
            { path: 'calificacion', component: CalificacionesComponent, title: 'Calificacion de Productos' },

        ]
    }
]
