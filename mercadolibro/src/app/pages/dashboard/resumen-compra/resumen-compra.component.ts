import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../../services/carrito.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Pedido } from '../../../models/pedido.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
  styleUrls: ['./resumen-compra.component.css'] // Corregido aquí
})
export class ResumenCompraComponent implements OnInit { // Añadido OnInit aquí
  carrito: CarritoItem[] = [];
  total: number = 0;

  formasPago: string[] = [];
  formasEnvio: string[] = [];
  direccionesEnvio: string[] = [];

  formaEnvioSeleccionada: string = '';
  formaPagoSeleccionada: string = '';
  direccionSeleccionada: string = '';

  constructor(private carritoService: CarritoService, private http: HttpClient, private router: Router) { }

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

  finalizarcompra(): any {
    this.router.navigate(['/dashboard/pasarela']);
  }

  // enviarPedido(): void {
  //   const pedido: Pedido = {
  //     usuario_cliente: 1, // Aquí debes poner el ID del usuario real
  //     estado_pedido: 'En camino',
  //     direccion_envio: this.direccionSeleccionada,
  //     forma_envio: this.formaEnvioSeleccionada,
  //     forma_pago: this.formaPagoSeleccionada
  //   };

  //   this.http.post('http://127.0.0.1:8000/api/pedido/', pedido)
  //     .subscribe(
  //       response => {
  //         console.log('Pedido enviado correctamente', response);
  //       },
  //       error => {
  //         console.error('Error al enviar el pedido', error);
  //       }
  //     );
  // }
}
