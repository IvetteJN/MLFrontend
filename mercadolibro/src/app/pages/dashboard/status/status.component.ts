import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Order {
  orderId: number;
  orderDate: Date;
  status: string;
}

@Component({
  selector: 'app-order-status',
  standalone: true,
  imports:[CommonModule, RouterLink],
  template:`
    <div *ngIf="order">
      Order ID: {{ order.orderId }}<br>
      Order Date: {{ order.orderDate | date: 'short' }}<br>
      Status: {{ order.status }}
    </div>
  `,
  styleUrls: ['./status.component.css']
})
export class OrderStatusComponent {
  @Input() order: Order | undefined;
}