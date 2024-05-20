import { Injectable } from '@angular/core';
import { Book } from '../models/book.model'; // Ajusta la ruta según tu estructura

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private allBooks: Book[] = [];
  private carritoItems: Book[] = [];

  constructor() {
    this.cargarDatos();
  }

  private cargarDatos(): void {
    const jsonUrl = 'assets/books.json';
    fetch(jsonUrl)
      .then(response => response.json())
      .then(data => {
        this.allBooks = data;
      })
      .catch(error => console.error(error));
  }

  getBooks(): Book[] {
    return this.allBooks;
  }

  searchBooks(searchTerm: string): Book[] {
    return this.allBooks.filter(book =>
      book.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  agregarAlCarrito(bookTitle: string): void {
    const book = this.allBooks.find(book => book.titulo === bookTitle);
    if (book) {
      if (book.stock > 0) {
        this.carritoItems.push(book);
        book.stock--;
      } else {
        alert('No hay stock disponible para este producto.');
      }
    }
  }

  eliminarDelCarrito(bookTitle: string): void {
    const bookIndex = this.carritoItems.findIndex(book => book.titulo === bookTitle);
    if (bookIndex !== -1) {
      const book = this.carritoItems[bookIndex];
      this.carritoItems.splice(bookIndex, 1);
      book.stock++;
    }
  }

  actualizarCarrito(): { items: Book[], total: number } {
    let total = 0;
    this.carritoItems.forEach(book => {
      total += book.precio;
    });
    return {
      items: this.carritoItems,
      total
    };
  }
}
