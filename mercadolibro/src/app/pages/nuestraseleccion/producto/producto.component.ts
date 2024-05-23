import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

interface Book {
  titulo: string;
  autor: string;
  categoria: string;
  precio: number;
  stock: number;
  portada: string;
  descripcion: string; // Añadimos descripción al modelo de libro
}

interface BookInfo extends Book {
  dataTitle: string;
}

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  books: Book[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    const json = "../../../../assets/data/books.json";
    console.log("Solicitando JSON desde:", json);
    fetch(json)
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.books = data;
        showBooks(this.books);
      })
      .catch(error => console.error(error));
  }

  addToCart(book: Book): void {
    // Add to cart logic
  }

  navigateToSummary(title: string): void {
    this.router.navigateByUrl(`/descripcion?title=${encodeURIComponent(title)}`);
  }
}

function showBooks(books: Book[]) {
  const cardContainer = document.getElementById("cardContainer");
  if (cardContainer) {
    cardContainer.innerHTML = "";
    books.forEach(book => {
      const bookInfo: BookInfo = { ...book, dataTitle: book.titulo };
      const card = createCard(bookInfo);
      cardContainer.appendChild(card);
    });
  }
}

function createCard(bookInfo: BookInfo): HTMLDivElement {
  const card = document.createElement("div");
  card.classList.add("product-card");

  const cardContent = `
    <div class="card text-bg-secondary mb-1" style="max-width: 700px;">
      <div class="d-flex align-items-center">
        <div class="col-4">
          <img src="${bookInfo.portada}" alt="${bookInfo.titulo}" class="card-img-top">
        </div>
        <div class="col-8">
          <div class="card-body">
            <p id="title"><br>Título: ${bookInfo.titulo}</p>
            <p>Autor: ${bookInfo.autor || "Desconocido"}</p>
            <p>Categoría: ${bookInfo.categoria || "Desconocida"}</p>
            <p>Precio: $ ${bookInfo.precio}</p>
            <p class="stock">Stock: ${bookInfo.stock}</p>
            <button class="btn btn-dark" onclick="agregarAlCarrito('${bookInfo.titulo}')">Comprar</button>
            <button class="btn btn-light" (click)="navigateToSummary('${encodeURIComponent(bookInfo.titulo)}')">Resumen</button>
          </div>
        </div>
      </div>
    </div>
  `;

  card.innerHTML = cardContent;
  card.setAttribute("data-title", bookInfo.titulo);
  return card;
}
