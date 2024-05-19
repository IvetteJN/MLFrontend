import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  usuarios$ = this.usuariosSvc.getUsuarios();
  usuarioSeleccionado: any; // Detalles del usuario seleccionado

  constructor(private usuariosSvc: ClienteService) {}

  ngOnInit(): void {
    // Supongamos que obtienes el ID del usuario desde algún lugar (por ejemplo, una ruta)
    const userId = 1; // ID de ejemplo

    // Obtén el usuario por su ID
    this.usuariosSvc.getUsuarioPorId(userId).subscribe(
      (userDetails: any) => {
        this.usuarioSeleccionado = userDetails;
      },
      (error) => {
        console.error('Error al obtener el usuario:', error);
      }
    );
  }
}

