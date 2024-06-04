import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface CarritoItem {
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

  private formaEnvioUrl = 'http://127.0.0.1:8000/api/formaEnvio/';
  private formaPagoUrl = 'http://127.0.0.1:8000/api/formaPago/';
  private direccionUrl = 'http://127.0.0.1:8000/api/direccion/';

  constructor(private http: HttpClient) { }

  agregarProducto(nuevoItem: CarritoItem): void {
    const carritoActual = this._carrito.getValue();
    const productoExistente = carritoActual.find(item => item.titulo === nuevoItem.titulo);

    if (productoExistente) {
      productoExistente.cantidad += nuevoItem.cantidad;
    } else {
      carritoActual.push(nuevoItem);
    }

    this._carrito.next(carritoActual);
    this.actualizarCantidadProductos(carritoActual);
  }

  actualizarCantidadProductos(carrito: CarritoItem[]): void {
    const cantidad = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    this._cantidadProductos.next(cantidad);
  }

  getFormaEnvio(): Observable<string[]> {
    return this.http.get<any[]>(this.formaEnvioUrl).pipe(
      map(response => response.map(item => item.descripcion))
    );
  }

  getFormaPago(): Observable<string[]> {
    return this.http.get<any[]>(this.formaPagoUrl).pipe(
      map(response => response.map(item => item.descripcion))
    );
  }

  getDireccionEnvio(): Observable<string[]> {
    return this.http.get<any[]>(this.direccionUrl).pipe(
      map(response => response.map(item => item.direccion))
    );
  }
}