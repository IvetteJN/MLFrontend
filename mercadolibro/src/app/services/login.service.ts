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
      tap(response => {
        // Si la autenticación es exitosa, cambia el estado de autenticación a true
        if (response) {
          this.isAuthenticatedSubject.next(true);
        }
      })
    );
  }

  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  logout(): void {
    this.isAuthenticatedSubject.next(false);
  }
}
