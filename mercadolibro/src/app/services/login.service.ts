import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  registrarUsuario(nombre: string, email: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/registro/`;
    const body = { nombre, email, contrasena: password };
    return this.http.post(url, body, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  autenticarUsuario(email: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/login/`;
    const body = { email, contrasena: password };
    return this.http.post(url, body, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).pipe(
      tap({
        next: (response) => {
          // Guardar los datos del cliente logueado en el almacenamiento local
          localStorage.setItem('clienteLogueado', JSON.stringify(response));
        },
        error: (error) => {
          console.error('Error al autenticar usuario:', error);
        }
      })
    );
  }

  obtenerClienteLogueado(): any {
    const clienteLogueado = localStorage.getItem('clienteLogueado');
    return clienteLogueado ? JSON.parse(clienteLogueado) : null;
  }
}