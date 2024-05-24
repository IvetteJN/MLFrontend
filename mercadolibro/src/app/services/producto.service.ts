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
}
