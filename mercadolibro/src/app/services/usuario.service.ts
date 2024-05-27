import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<usuario[]>{
    return this.http.get<usuario[]>("http://127.0.0.1:8000/api/clientes/");
  }

  getUsuarioById(id: number): Observable<usuario> {
    const url = `http://127.0.0.1:8000/api/clientes/${id}`;
    return this.http.get<usuario>(url);
  }
}
