import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../../services/carrito.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Pedido } from '../../../services/models/pedido.model';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';


interface CarritoItem {
  titulo: string;
  precio: number;
  cantidad: number;
}

@Component({
  selector: 'app-resumen-compra',
  standalone: true,
  imports: [NgFor, FormsModule, ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './finalizar-compra.component.html',
  styleUrl: './finalizar-compra.component.css'
})
export class ResumenCompraComponent {
  carrito: CarritoItem[] = [];
  total: number = 0;

  formasPago: string[] = [];
  formasEnvio: string[] = [];
  direccionesEnvio: string[] = [];

  formaEnvioSeleccionada: string = '';
  formaPagoSeleccionada: string = '';
  direccionSeleccionada: string = '';

  constructor(private carritoService: CarritoService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getFormaPago();
    this.getFormaEnvio();
    this.getDireccionEnvio();
    this.carritoService.carrito.subscribe(carrito => {
      this.carrito = carrito;
      this.calcularTotal();
    });
  }

  calcularTotal(): void {
    this.total = this.carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  }

  getFormaPago(): void {
    this.carritoService.getFormaPago().subscribe(
      formasPago => {
        this.formasPago = formasPago;
      },
      error => {
        console.error('Error al obtener las formas de pago', error);
      }
    );
  }

  getFormaEnvio(): void {
    this.carritoService.getFormaEnvio().subscribe(
      formasEnvio => {
        this.formasEnvio = formasEnvio;
      },
      error => {
        console.error('Error al obtener las formas de envío', error);
      }
    );
  }

  getDireccionEnvio(): void {
    this.carritoService.getDireccionEnvio().subscribe(
      direccionesEnvio => {
        this.direccionesEnvio = direccionesEnvio;
      },
      error => {
        console.error('Error al obtener las direcciones', error);
      }
    );
  }
}
