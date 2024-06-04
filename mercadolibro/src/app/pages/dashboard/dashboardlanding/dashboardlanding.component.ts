import { Component, OnInit } from '@angular/core';
import { usuario } from '../../../models/usuario.model';
import { UsuarioService } from '../../../services/usuario.service';
import { LoginService } from '../../../services/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboardlanding',
  templateUrl: './dashboardlanding.component.html',
  styleUrls: ['./dashboardlanding.component.css']
})
export class DashboardlandingComponent implements OnInit {
  clienteLogueado: any;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.clienteLogueado = this.loginService.obtenerClienteLogueado();
  }
}

