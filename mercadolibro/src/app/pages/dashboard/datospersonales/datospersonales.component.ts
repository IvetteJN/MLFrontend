import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-datospersonales',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './datospersonales.component.html',
  styleUrl: './datospersonales.component.css'
})
export class DatospersonalesComponent {
usuario: any;
successMessage: string ='Datos Guardados' ;
errorMessage: string = 'Hubo Un Problema';
onSubmit() {
throw new Error('Method not implemented.');
}
userForm: any;

}
