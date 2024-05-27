import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NuestraseleccionCarruselComponent } from './nuestraseleccion-carrusel/nuestraseleccion-carrusel.component';
import { ProductoComponent } from './producto/producto.component';
import { CarritoComponent } from './carrito/carrito.component';

@Component({
  selector: 'app-nuestraseleccion',
  imports: [CommonModule, RouterModule, NuestraseleccionCarruselComponent, ProductoComponent, CarritoComponent],
  templateUrl: './nuestraseleccion.component.html',
  styleUrls: ['./nuestraseleccion.component.css'],
  standalone: true,
})
export class NuestraseleccionComponent {
  @ViewChild(CarritoComponent) carritoComponent!: CarritoComponent;

  handleAgregarAlCarrito(event: { titulo: string, precio: number }): void {
    this.carritoComponent.agregarAlCarrito({ ...event, cantidad: 1 });
  }
}
