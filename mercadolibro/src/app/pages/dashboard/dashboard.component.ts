import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { CommonModule } from '@angular/common';
import { HistorialComprasComponent } from './historial-compras/historial-compras.component';
import { HistorialComprasService } from '../../services/historial-compras.service';
import { DatospersonalesComponent } from './datospersonales/datospersonales.component';
import { RouterLink } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';
import { OrderStatusComponent } from './status/status.component';
import { CalificacionesComponent } from './calificaciones/calificaciones.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,

  imports: [DatospersonalesComponent, RouterLink, CommonModule, SidebarComponent, OrderStatusComponent, CalificacionesComponent],

  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {


  constructor() { }




}

