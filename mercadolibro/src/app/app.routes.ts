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
import { DatospersonalesComponent } from './pages/dashboard/datospersonales/datospersonales.component';

export const routes: Routes = [
    { path: 'landing', title: 'Home', component: LandingComponent },
    { path: '', title: 'Home', component: LandingComponent },
    { path: 'quienes', title: 'Quienes Somos', component: QuienesComponent },
    { path: 'nuestraseleccion', title: 'Nuestra Selección', component: NuestraseleccionComponent },
    { path: 'contacto', title: 'Contacto', component: ContactoComponent },
    { path: 'inicio', title: 'Login', component: InicioComponent },
    { path: 'categoria', title: 'Categoria', component: CategoriaComponent },
    { path: 'descripcion', title: 'Descripcion', component: DescripcionComponent },
    {
        path: 'dashboard', title: 'Mi perfil', component: DashboardComponent,
        children: [
            { path: 'editarDatosPersonales', component: DatospersonalesComponent, title: 'Editar datos personales' },
        ]
    },
    { path: 'producto', title: "Producto", component: ProductoComponent }
]