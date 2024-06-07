import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Importa el servicio Router

@Component({
  selector: 'app-pasarela',
  templateUrl: './pasarela.component.html',
  styleUrls: ['./pasarela.component.css']
})
export class PasarelaComponent {
  preferenceId: string | undefined;

  constructor(private http: HttpClient, private router: Router) { }
  
  createPreferenceAndRedirect() {
    const preferenceData = {
      items: [
        {
          title: 'Producto de Prueba',
          unit_price: 100,
          quantity: 1,
        }
      ],
    };

    this.http.post<any>('https://api.mercadopago.com/checkout/preferences?access_token=TEST-6771469815948587-060715-3d53e33eb7fe31e220ad7f572e68ae8f-1846522961', preferenceData)
      .subscribe(response => {
        this.preferenceId = response.id;
        this.redirectToSandbox(this.preferenceId);
      }, error => {
        console.error('Error creating preference:', error);
        // Redirige a la página de error en caso de error
        this.router.navigate(['/dashboard/resumenCompra']);
      });
  }

  redirectToSandbox(preferenceId: string | undefined) {
    if (preferenceId) {
      window.location.href = `https://sandbox.mercadopago.com.ar/checkout/v1/redirect?pref_id=${preferenceId}`;
    } else {
      console.error('No se pudo redirigir porque preferenceId no está definido.');
    }
  }
}
