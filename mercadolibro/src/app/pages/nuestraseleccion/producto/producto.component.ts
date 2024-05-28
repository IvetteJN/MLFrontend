import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Libro } from "../../../services/producto";
import { ProductoService } from "../../../services/producto.service";
import { DescripcionComponent } from "../descripcion/descripcion.component";
import { RouterLink } from "@angular/router";
import { CategoriaComponent } from "../categoria/categoria.component";

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
  imports: [DescripcionComponent, RouterLink, CategoriaComponent]
})
export class ProductoComponent implements OnInit {

  libros: Libro[] = [];

  @Output() agregarAlCarrito = new EventEmitter<{ titulo: string, precio: number, stock: number }>();

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.getLibros();
  }

  getLibros(): void {
    this.productoService.getLibros().subscribe(libros => this.libros = libros);
  }

  anadirAlCarrito(libro: Libro): void {
    if (libro.stock > 0) {
      this.agregarAlCarrito.emit({ titulo: libro.titulo, precio: libro.precio, stock: libro.stock });
      libro.stock--;
    } else {
      alert('El libro seleccionado no tiene stock disponible.');
    }
  }

  buscarLibros(params: { termino: string, categoria: string }): void {
    if (!params.termino && !params.categoria) {
      this.getLibros();
    } else {
      this.productoService.searchLibros(params.termino, params.categoria).subscribe(libros => this.libros = libros);
    }
  }
}
