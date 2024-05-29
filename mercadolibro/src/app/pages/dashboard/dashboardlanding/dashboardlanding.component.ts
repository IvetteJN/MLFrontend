import { Component, OnInit } from '@angular/core';
import { usuario } from '../../../models/usuario.model';
import { UsuarioService } from '../../../services/usuario.service';

@Component({
  selector: 'app-dashboardlanding',
  templateUrl: './dashboardlanding.component.html',
  styleUrls: ['./dashboardlanding.component.css']
})
export class DashboardlandingComponent implements OnInit {
  usuario: usuario = { id: 0, nombre: '', email: '', password: '' };

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarioById(1).subscribe(
      (data: usuario) => {
        this.usuario = data;
      },
      (error) => {
        console.log('Error al obtener usuario:', error);
      }
    );
  }
}

