import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent {
  order = {
    orderId: 12345,
    status: 'En proceso'
  };
}
