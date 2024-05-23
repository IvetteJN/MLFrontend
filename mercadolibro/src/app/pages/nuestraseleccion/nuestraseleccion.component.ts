import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuestraseleccionCarruselComponent } from './nuestraseleccion-carrusel/nuestraseleccion-carrusel.component';
import { CategoriaComponent } from './categoria/categoria.component';
// import { CarritoComponent } from './carrito/carrito.component';
import { ProductoComponent } from './producto/producto.component';

@Component({
  selector: 'app-nuestraseleccion',
  standalone: true,
  imports: [RouterOutlet, NuestraseleccionCarruselComponent, CategoriaComponent, ProductoComponent],
  templateUrl: './nuestraseleccion.component.html',
  styleUrls: ['./nuestraseleccion.component.css']
})
export class NuestraseleccionComponent { }
