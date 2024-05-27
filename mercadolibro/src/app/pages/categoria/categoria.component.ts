import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent {
 consulta: string = "";

 enviarConsulta(){
  console.log(this.consulta)
 }
}