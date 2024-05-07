import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuienesComponent } from './pages/quienes/quienes.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,QuienesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  title = 'mercadolibro';
}
