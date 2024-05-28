import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CarritoService } from '../../../services/carrito.service';
import { ProductoService } from '../../../services/producto.service';

interface CarritoItem {
  titulo: string;
  precio: number;
  cantidad: number;
  stock: number;
}

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [NgFor],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent {
  carrito: CarritoItem[] = [];
  total: number = 0;

  constructor(private carritoService: CarritoService, private productoService: ProductoService) {
    this.carritoService.carrito.subscribe(carrito => {
      this.carrito = carrito;
      this.calcularTotal();
    });
  }

  agregarAlCarrito(item: CarritoItem): void {
    const existingItem = this.carrito.find(ci => ci.titulo === item.titulo);
    if (existingItem && existingItem.stock > existingItem.cantidad) {
      existingItem.cantidad++;
      this.actualizarCarrito();
    } else if (!existingItem && item.stock > 0) {
      this.carrito.push({ ...item, cantidad: 1 });
      this.actualizarCarrito();
    } else {
      alert('No hay suficiente stock disponible.');
    }
  }

  eliminarDelCarrito(titulo: string): void {
    const index = this.carrito.findIndex(ci => ci.titulo === titulo);
    if (index > -1) {
      this.carrito[index].cantidad--;
      if (this.carrito[index].cantidad === 0) {
        this.carrito.splice(index, 1);
      }
      this.actualizarCarrito();
    }
  }

  calcularTotal(): void {
    this.total = this.carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  }

  private actualizarCarrito(): void {
    this.carritoService.actualizarCarrito(this.carrito);
  }
}
