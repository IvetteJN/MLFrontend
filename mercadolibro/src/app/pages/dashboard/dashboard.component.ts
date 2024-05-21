import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { CommonModule } from '@angular/common';
import { HistorialComprasService } from '../../services/historial-compras.service';

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

  constructor(private usuariosSvc: ClienteService) { }

  ngOnInit(): void {

    const userId = 1;

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

