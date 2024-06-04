import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuariosUrl = 'http://127.0.0.1:8000/api/clientes/';

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<usuario[]> {
    return this.http.get<usuario[]>(this.usuariosUrl);
  }

  getUsuarioById(id: number): Observable<usuario> {
    const url = `${this.usuariosUrl}${id}/`;
    return this.http.get<usuario>(url);
  }

  actualizarUsuario(usuario: usuario): Observable<usuario> {
    const url = `${this.usuariosUrl}${usuario.id}/`;
    return this.http.put<usuario>(url, usuario);
  }
}
