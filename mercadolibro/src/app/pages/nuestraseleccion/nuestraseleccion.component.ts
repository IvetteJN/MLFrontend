import { Component, OnInit } from '@angular/core';
import { NuestraseleccionCarruselComponent } from './nuestraseleccion-carrusel/nuestraseleccion-carrusel.component';
import { ProductoComponent } from './producto/producto.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CarritoService } from '../../services/carrito.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarritoItem } from '../../models/carrito.model';


@Component({
  selector: 'app-nuestraseleccion',
  imports: [CommonModule, RouterModule, NuestraseleccionCarruselComponent, ProductoComponent, CarritoComponent],
  templateUrl: './nuestraseleccion.component.html',
  styleUrls: ['./nuestraseleccion.component.css'],
  standalone: true,
})

export class NuestraseleccionComponent implements OnInit {

  constructor(private carritoService: CarritoService) { }

  ngOnInit(): void { }

  agregarProductoAlCarrito(event: { titulo: string; precio: number; }): void {
    const nuevoItem: Partial<CarritoItem> = {
      cantidad: 1,
      titulo: event.titulo,
      precio: event.precio,
    };

    this.carritoService.actualizarCarrito([nuevoItem as CarritoItem]);
  }
}