import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

  books: any[] = [];
  allBooks: any[] = [];
  showScrollButton: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchBooks();
    window.addEventListener('scroll', this.scrollListener.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scrollListener.bind(this));
  }

  fetchBooks(): void {

    this.http.get<any>('../../').subscribe(data => {
      this.allBooks = data;
      this.books = data;
    });
  }

  private scrollListener(): void {
    // Lógica de desplazamiento aquí

  

  }
  }
