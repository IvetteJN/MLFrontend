import { Component } from '@angular/core';
import { NuestraseleccionCarruselComponent } from './nuestraseleccion-carrusel/nuestraseleccion-carrusel.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProductoComponent } from './producto/producto.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DescripcionComponent } from './descripcion/descripcion.component';

@Component({
  selector: 'app-nuestraseleccion',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NuestraseleccionCarruselComponent, CategoriaComponent, ProductoComponent, DescripcionComponent],
  templateUrl: './nuestraseleccion.component.html',
  styleUrls: ['./nuestraseleccion.component.css']
})
export class NuestraseleccionComponent { }
