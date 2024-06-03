import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../../services/carrito.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Pedido } from '../../../models/pedido.model';
import { HttpClient } from '@angular/common/http';

interface CarritoItem {
  titulo: string;
  precio: number;
  cantidad: number;
}

@Component({
  selector: 'app-resumen-compra',
  standalone: true,
  imports: [NgFor, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './resumen-compra.component.html',
  styleUrl: './resumen-compra.component.css'
})
export class ResumenCompraComponent implements OnInit {
  carrito: CarritoItem[] = [];
  total: number = 0;
  formasPago: string[] = [];
  formasEnvio: string[] = [];
  formaEnvioSeleccionada: number = 0;
  formaPagoSeleccionada: number = 0;

  direccionEnvio: string = '';

  constructor(private carritoService: CarritoService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getFormaPago();
    this.getFormaEnvio();
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

  enviarPedido(): void {
    const pedido: Pedido = {
      usuario_cliente: 1,
      estado_pedido: 'En camino',
      direccion_envio: this.direccionEnvio,
      forma_envio: this.formaEnvioSeleccionada,
      forma_pago: this.formaPagoSeleccionada
    };

    this.http.post('http://127.0.0.1:8000/api/pedido/', pedido)
      .subscribe(
        response => {
          console.log('Pedido enviado correctamente', response);
        },
        error => {
          console.error('Error al enviar el pedido', error);
        }
      );
  }
}