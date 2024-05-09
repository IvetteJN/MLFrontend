import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NavComponent } from './shared/nav/nav.component';
import { NuestraseleccionComponent } from './pages/nuestraseleccion/nuestraseleccion.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactoComponent, FooterComponent, NavComponent,LandingComponent, NuestraseleccionComponent],
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})

export class AppComponent {
  title = 'Mercado Libro';
}
