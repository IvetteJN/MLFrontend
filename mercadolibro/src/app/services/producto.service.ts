import { Injectable } from '@angular/core';
import { Libro } from './producto';
import { LIBROS } from './producto-mock';
import { Observable, of } from 'rxjs';


@Injectable({ providedIn: 'root' })

export class ProductoService {

  constructor() { }

  getLibros(): Observable<Libro[]> {
    const libros = of(LIBROS);
    return libros;
  }

  getLibro(titulo: string): Observable<Libro> {
    const libro = LIBROS.find(h => h.titulo === titulo)!;
    return of(libro);
  }

  getCategorias(): Observable<string[]> {
    const categorias = [...new Set(LIBROS.map(libro => libro.categoria))];
    return of(categorias);
  }

  searchLibros(termino: string, categoria: string): Observable<Libro[]> {
    let libros = LIBROS;

    if (termino) {
      termino = termino.toLowerCase();
      libros = libros.filter(libro => libro.titulo.toLowerCase().includes(termino) || libro.autor.toLowerCase().includes(termino));
    }

    if (categoria) {
      libros = libros.filter(libro => libro.categoria === categoria);
    }

    return of(libros);
  }
}
