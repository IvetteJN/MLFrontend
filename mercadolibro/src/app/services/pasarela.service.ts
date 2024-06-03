import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasarelaService {

  private accessToken = 'YOUR_TEST_ACCESS_TOKEN';

  constructor(private http: HttpClient) {}

  crearpasarela(paymentData: any): Observable<any> {
    return this.http.post('https://api.mercadopago.com/v1/payments', paymentData, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      }
    });
  }
}
