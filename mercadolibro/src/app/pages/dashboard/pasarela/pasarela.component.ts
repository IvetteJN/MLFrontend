import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-pasarela',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './pasarela.component.html',
  styleUrls: ['./pasarela.component.css']
})
export class PasarelaComponent {
  pagoFormulario: FormGroup;
  mensaje: string = '';
  mensajeTipo: string = '';

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.pagoFormulario = this.formBuilder.group({
      nombreTarjeta: ['', Validators.required],
      numeroTarjeta: ['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      fechaExpiracion: ['', [Validators.required, this.fechaExpiracionValidator()]],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]]
    });
  }

  enviarDatosPago() {
    if (this.pagoFormulario.valid) {
      console.log('Formulario de pago válido', this.pagoFormulario.value);

      const { nombreTarjeta, numeroTarjeta, fechaExpiracion, cvv } = this.pagoFormulario.value;

      const token = 'TOKEN_DE_PRUEBA'; // Deberías generar un token de prueba para simular el proceso de pago

      this.procesarPago(token);
    } else {
      console.log('Formulario de pago no válido');
    }
  }

  procesarPago(token: string) {
    // Aquí puedes enviar el token al backend de Mercado Pago o procesarlo directamente en el frontend

    this.http.post('YOUR_BACKEND_ENDPOINT', { token }).subscribe(
      (response: any) => {
        this.mensaje = '¡Pago realizado exitosamente!';
        this.mensajeTipo = 'success';
        console.log('Pago realizado exitosamente', response);
      },
      (error: HttpErrorResponse) => {
        this.mensaje = 'Error al realizar el pago. Por favor, inténtelo nuevamente.';
        this.mensajeTipo = 'danger';
        console.error('Error al realizar el pago', error);
      }
    );
  }

  fechaExpiracionValidator() {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const [mes, anio] = control.value.split('/');
      const fechaActual = new Date();
      const mesActual = fechaActual.getMonth() + 1;
      const anioActual = fechaActual.getFullYear();
      const esValido = (parseInt(anio, 10) > anioActual) || (parseInt(anio, 10) === anioActual && parseInt(mes, 10) >= mesActual);

      return esValido ? null : { fechaInvalida: true };
    };
  }
}