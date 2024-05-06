import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactoComponent],
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'Mercado Libro';
}
