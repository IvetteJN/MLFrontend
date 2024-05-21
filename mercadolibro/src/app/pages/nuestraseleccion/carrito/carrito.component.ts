import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CarritoService } from '../../../services/carrito.service';
import { Book } from '../../../models/book.model';



@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  books: Book[] = [];
  carrito: Book[] = [];
  total: number = 0;
  searchTerm: string = '';

  constructor(private carritoService: CarritoService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.books = this.carritoService.getBooks();
    this.actualizarCarrito();
  }

  actualizarCarrito(): void {
    const carrito = this.carritoService.actualizarCarrito();
    this.carrito = carrito.items;
    this.total = carrito.total;
    this.cdr.detectChanges();  // Forzar la detección de cambios
  }

  agregarAlCarrito(bookTitle: string): void {
    this.carritoService.agregarAlCarrito(bookTitle);
    this.actualizarCarrito();
  }

  eliminarDelCarrito(bookTitle: string): void {
    this.carritoService.eliminarDelCarrito(bookTitle);
    this.actualizarCarrito();
  }

  buscarLibros(): void {
    this.books = this.carritoService.searchBooks(this.searchTerm);
  }
}
