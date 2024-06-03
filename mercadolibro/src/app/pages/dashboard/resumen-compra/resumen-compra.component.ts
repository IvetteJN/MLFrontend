import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../../services/carrito.service';
import { NgFor } from '@angular/common';
import { Routes } from '@angular/router';

interface CarritoItem {
  titulo: string;
  precio: number;
  cantidad: number;
}

@Component({
  selector: 'app-resumen-compra',
  standalone: true,
  imports: [NgFor],
  templateUrl: './resumen-compra.component.html',
  styleUrl: './resumen-compra.component.css'
})
export class ResumenCompraComponent implements OnInit {
  carrito: CarritoItem[] = [];
  total: number = 0;

  constructor(private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.carritoService.carrito.subscribe(carrito => {
      this.carrito = carrito;
      this.calcularTotal();
    });
  }

  calcularTotal(): void {
    this.total = this.carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  }
}