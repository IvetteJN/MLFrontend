import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { usuario } from '../../../models/usuario.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboardlanding',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './dashboardlanding.component.html',
  styleUrl: './dashboardlanding.component.css'
})
export class DashboardlandingComponent {
  usuario: usuario = {
    id: 1,
    nombre: 'marcelo',
    email: 'a@a.com',
    password: '1234',

  }
}
