import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
=======
import { ContactoComponent } from './pages/contacto/contacto.component';
>>>>>>> IvetteNobilta

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet],
=======
  imports: [RouterOutlet, ContactoComponent],
>>>>>>> IvetteNobilta
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
<<<<<<< HEAD
  title = 'mercadolibro';
=======
  title = 'Mercado Libro';
>>>>>>> IvetteNobilta
}
