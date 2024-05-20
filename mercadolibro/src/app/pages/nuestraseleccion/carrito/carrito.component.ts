import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../../services/carrito.service';
import { Book } from '../../../models/book.model'; // Ajusta la ruta según tu estructura

@Component({
  selector: 'app-carrito',
  
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  books: Book[] = [];
  carrito: Book[] = [];
  total: number = 0;
  searchTerm: string = '';

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.books = this.carritoService.getBooks();
  }

  onSearch(): void {
    if (this.searchTerm.trim() === '') {
      this.books = this.carritoService.getBooks();
    } else {
      this.books = this.carritoService.searchBooks(this.searchTerm);
    }
  }

  agregarAlCarrito(bookTitle: string): void {
    this.carritoService.agregarAlCarrito(bookTitle);
    this.actualizarCarrito();
  }

  eliminarDelCarrito(bookTitle: string): void {
    this.carritoService.eliminarDelCarrito(bookTitle);
    this.actualizarCarrito();
  }

  actualizarCarrito(): void {
    const carritoData = this.carritoService.actualizarCarrito();
    this.carrito = carritoData.items;
    this.total = carritoData.total;
  }
}
