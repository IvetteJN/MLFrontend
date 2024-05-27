import { Location, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Libro } from "../../../services/producto"
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../../services/producto.service';

@Component({
  selector: 'app-descripcion',
  standalone: true,
  imports: [NgIf],
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent {

  @Input() libro?: Libro;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private location: Location) { }

  ngOnInit(): void {
    this.getLibro();
  }

  getLibro(): void {
    const titulo = String(this.route.snapshot.paramMap.get('titulo'));
    this.productoService.getLibro(titulo)
      .subscribe(libro => this.libro = libro);
  }

  goBack(): void {
    this.location.back();
  }
}