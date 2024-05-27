import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private _cantidadProductos = new BehaviorSubject<number>(0);
  cantidadProductos = this._cantidadProductos.asObservable();

  constructor() { }

  actualizarCantidadProductos(cantidad: number): void {
    this._cantidadProductos.next(cantidad);
  }
}
