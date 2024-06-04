import { Component, OnInit } from "@angular/core";
import { Libro } from "../../../services/producto";
import { ProductoService } from "../../../services/producto.service";
import { RouterLink } from "@angular/router";
import { CategoriaComponent } from "../categoria/categoria.component";
import { DescripcionComponent } from "../descripcion/descripcion.component";
import { CarritoService, CarritoItem } from "../../../services/carrito.service";

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
  imports: [RouterLink, CategoriaComponent, DescripcionComponent]
})
export class ProductoComponent implements OnInit {

  libros: Libro[] = [];

  constructor(private productoService: ProductoService, private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.getLibros();
  }

  getLibros(): void {
    this.productoService.getLibros().subscribe(libros => {
      console.log('Libros:', libros);
      this.libros = libros;
    });
  }

  anadirAlCarrito(libro: Libro): void {
    if (libro.stock > 0) {
      const nuevoItem: CarritoItem = {
        titulo: libro.titulo,
        precio: libro.precio,
        cantidad: 1
      };
      this.carritoService.agregarProducto(nuevoItem);
      libro.stock--;
    } else {
      alert('El libro seleccionado no tiene stock disponible.');
    }
  }

  buscarLibros(params: { termino: string, categoria: string }): void {
    this.productoService.searchLibros(params.termino, params.categoria).subscribe(libros => this.libros = libros);
  }
}
