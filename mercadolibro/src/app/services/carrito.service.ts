import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface CarritoItem {
  titulo: string;
  precio: number;
  cantidad: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private _carrito = new BehaviorSubject<CarritoItem[]>([]);
  private _cantidadProductos = new BehaviorSubject<number>(0);
  carrito = this._carrito.asObservable();
  cantidadProductos = this._cantidadProductos.asObservable();

  constructor() { }

  actualizarCarrito(carrito: CarritoItem[]): void {
    this._carrito.next(carrito);
    this.actualizarCantidadProductos(carrito);
  }

  actualizarCantidadProductos(carrito: CarritoItem[]): void {
    const cantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    this._cantidadProductos.next(cantidad);
  }
}
