import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface CarritoItem {
  titulo: string;
  precio: number;
  cantidad: number;
}

@Component({
  selector: 'app-carrito',
  imports: [NgFor],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
  standalone: true
})
export class CarritoComponent {
  carrito: CarritoItem[] = [];
  total: number = 0;

  agregarAlCarrito(item: CarritoItem): void {
    const existingItem = this.carrito.find(ci => ci.titulo === item.titulo);
    if (existingItem) {
      existingItem.cantidad++;
    } else {
      this.carrito.push({ ...item, cantidad: 1 });
    }
    this.calcularTotal();
  }

  eliminarDelCarrito(titulo: string): void {
    const index = this.carrito.findIndex(ci => ci.titulo === titulo);
    if (index > -1) {
      this.carrito[index].cantidad--;
      if (this.carrito[index].cantidad === 0) {
        this.carrito.splice(index, 1);
      }
    }
    this.calcularTotal();
  }

  calcularTotal(): void {
    this.total = this.carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  }
}
