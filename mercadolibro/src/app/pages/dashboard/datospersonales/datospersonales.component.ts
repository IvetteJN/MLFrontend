import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-datospersonales',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './datospersonales.component.html',
  styleUrls: ['./datospersonales.component.css']
})
export class DatospersonalesComponent {
  usuario: any = {
    nombre: '',
    email: '',
    direccion: ''
  };
  successMessage: string = '';
  errorMessage: string = '';

  handleInputChange(field: string, event: Event) {
    const target = event.target as HTMLInputElement;
    this.usuario[field] = target.value;
  }

  onSubmit() {
    if (this.isValid(this.usuario)) {
      this.successMessage = 'Datos Guardados';
      this.errorMessage = '';
      console.log('Datos Guardados:', this.usuario);
    } else {
      this.successMessage = '';
      this.errorMessage = 'Hubo Un Problema';
      console.error('Datos inválidos');
    }
  }

  isValid(usuario: any): boolean {
    return usuario && usuario.nombre && usuario.email && usuario.direccion;
  }
}