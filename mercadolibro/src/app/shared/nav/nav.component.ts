import { Component } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  cantidadProductosCarrito: number = 0;

  constructor(private carritoService: CarritoService) {
    this.carritoService.cantidadProductos.subscribe(cantidad => {
      this.cantidadProductosCarrito = cantidad;
    });
  }
}
