import { Component } from '@angular/core';
import { NuestraseleccionCarruselComponent } from './nuestraseleccion-carrusel/nuestraseleccion-carrusel.component';
import { CarritoComponent } from './carrito/carrito.component';


@Component({
  selector: 'app-nuestraseleccion',
  standalone: true,
  imports: [NuestraseleccionCarruselComponent, CarritoComponent],
  templateUrl: './nuestraseleccion.component.html',
  styleUrl: './nuestraseleccion.component.css'
})
export class NuestraseleccionComponent {

}
