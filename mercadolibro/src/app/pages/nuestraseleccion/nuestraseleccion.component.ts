import { Component } from '@angular/core';
import { NuestraseleccionCarruselComponent } from './nuestraseleccion-carrusel/nuestraseleccion-carrusel.component';
import { CommonModule } from '@angular/common';

import { CategoriaComponent } from './categoria/categoria.component';
import { ProductoComponent } from './producto/producto.component';
import { ShoppingModule } from '../../shopping.module';
import { CarritoComponent } from './carrito/carrito.component';


@Component({
  selector: 'app-nuestraseleccion',
  standalone: true,
  imports: [CommonModule, NuestraseleccionCarruselComponent, ShoppingModule, CategoriaComponent, ProductoComponent],
  templateUrl: './nuestraseleccion.component.html',
  styleUrls: ['./nuestraseleccion.component.css']
})
export class NuestraseleccionComponent {}
