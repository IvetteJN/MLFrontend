import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://127.0.0.1:8000/api';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

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
          // Si la autenticación es exitosa, cambia el estado de autenticación a true
          if (response) {
            this.isAuthenticatedSubject.next(true);
            localStorage.setItem('clienteLogueado', JSON.stringify(response));
          }
        },
        error: (error) => {
          console.error('Error al autenticar usuario:', error);
        }
      })
    );
  }

  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  logout(): void {
    this.isAuthenticatedSubject.next(false);
    localStorage.removeItem('clienteLogueado');
  }

  obtenerClienteLogueado(): any {
    return JSON.parse(localStorage.getItem('clienteLogueado') || '{}');
  }

  registrarDireccion(direccion: string, ciudad: string, provincia: string, codigo_postal: number): Observable<any> {
    const url = `${this.apiUrl}/direccion/`;
    const body = { direccion, ciudad, provincia, codigo_postal };
    return this.http.post(url, body, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }
}