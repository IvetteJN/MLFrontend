import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasarelaService {
  private apiUrl = 'key_OzEoTltfngcHB9DCZ9Y1obi'; // Reemplaza esto con la URL de tu API de pasarela

  constructor(private http: HttpClient) { }

  realizarPago(paymentData: any): Observable<any> {
    // URL de la API de la pasarela de pago para realizar pagos
    const url = `${this.apiUrl}/payments`;

    // Headers con la autenticación necesaria para la API de la pasarela de pago
    const headers = new HttpHeaders({
      'Authorization': 'key_OzEoTltfngcHB9DCZ9Y1obi', // Reemplaza esto con tu secret key de la pasarela de pago
      'Content-Type': 'application/json'
    });

    // Realizar la solicitud HTTP POST para realizar el pago
    return this.http.post(url, paymentData, { headers: headers });
  }
}
