import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { QuienesComponent } from '../../pages/quienes/quienes.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterOutlet, QuienesComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
