import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://127.0.0.1:8000/api';
  private isAuthenticated = false;

  constructor(private http: HttpClient) { }

  autenticarUsuario(email: string, contrasena: string): Observable<boolean> {
    const url = `${this.apiUrl}/login/`;
    const body = { email, contrasena };
    return this.http.post<any>(url, body, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).pipe(
      map(response => {
        if (response.success) { // Asume que tu API responde con un campo 'success'
          this.isAuthenticated = true;
          return true;
        } else {
          return false;
        }
      }),
      catchError(error => {
        console.error('Error al autenticar:', error);
        return of(false);
      })
    );
  }

  registrarUsuario(nombre: string, email: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/registro/`;
    const body = { nombre, email, contrasena: password };
    return this.http.post(url, body, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    this.isAuthenticated = false;
  }
}
