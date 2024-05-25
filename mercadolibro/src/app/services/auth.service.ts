import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';

interface TokenResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly TOKEN_KEY = 'token';
  private readonly API_URL = 'https://localhost:4200/dashboard'; 

  constructor(private http: HttpClient, private router: Router) { }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  login(credentials: { username: string, password: string }): void {
    this.http.post<TokenResponse>(`${this.API_URL}/inicio`, credentials, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
    .pipe(
      tap(response => {
        this.setToken(response.token);
        this.router.navigate(['/']);
      }),
      catchError(error => {
        console.error('Error durante carga login', error);
        return (error);
      })
    ).subscribe();
  }

  logout(): void {
    this.removeToken();
    this.router.navigate(['/inicio']);
  }

  private getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  private setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  private removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
