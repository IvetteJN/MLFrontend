import { Component, OnInit } from "@angular/core";
import { NgFor, NgIf } from "@angular/common";

import { LIBROS } from "../../../services/producto-mock";
import { Libro } from "../../../services/producto";
import { ProductoService } from "../../../services/producto.service";

import { DescripcionComponent } from "../descripcion/descripcion.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
  imports: [NgFor, NgIf, DescripcionComponent, RouterLink]
})
export class ProductoComponent implements OnInit {

  libros: Libro[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.getLibros();
  }

  getLibros(): void {
    this.productoService.getLibros()
      .subscribe(libros => this.libros = libros);
  }
}