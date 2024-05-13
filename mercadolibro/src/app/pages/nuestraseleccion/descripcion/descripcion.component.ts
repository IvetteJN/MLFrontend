import { Component } from '@angular/core';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent {
  constructor() {}

  showBookDetails(book: {
    titulo: any;
    autor: any;
    categoria: any;
    descripcion: any;
    precio: any;
    stock: any;
  }) {
    const bookContainer = document.getElementById('book-container');

    const bookContent = `
      <div class="mb-3" style="max-width: 760px;">
        <div class="row g-0">
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="title">${book.titulo}</h5>
              <p class="card-text">Autor: ${book.autor || 'Desconocido'}</p>
              <p class="card-text">Categoría: ${book.categoria || 'Desconocida'}</p>
              <p class="animado">Sinopsis: ${book.descripcion}</p>
              <p class="card-text2">Precio: $ ${book.precio}</p>
              <p class="card-text">Stock Disponible: ${book.stock} Unidades</p>
              <a class="btn btn-dark" href="Productos.html">Volver</a>
            </div>
          </div>
        </div>
      </div>
    `;

    if (bookContainer) {
      bookContainer.innerHTML = bookContent;
    } else {
      console.error('El elemento con ID "book-container" no se encontró.');
    }
  }
}