import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frase',
  standalone: true,
  template: `
    <div class="frase-container">
      <p class="frase">{{ frase }}</p>
    </div>
  `,
  styleUrls: ['./frase.component.css']
})
export class FraseComponent implements OnInit {
  frases = [
    "El misterio de la vida no es un problema a resolver, sino una realidad a experimentar - Duna, Frank Herbert",
    "Estar solo no tiene nada que ver con cuantas personas hay alrededor - Revolutionary Road, Richard Yates",
    "El hombre débil se vuelve fuerte cuando no tiene nada, porque sólo entonces puede sentir la locura de la desesperación - La compañía blanca, Arthur Conan Doyle",
    "Si buscas la perfección nunca estarás contento - Anna Karenina, Leon Tolstoy",
    "Mientras el corazón late, mientras el cuerpo y alma siguen juntos, no puedo admitir que cualquier criatura dotada de voluntad tiene necesidad de perder la esperanza en la vida - Viaje al centro de la tierra, Julio Verne",
    "Tengo esperanza o podría no vivir - La isla del doctor Moreau, H.G. Wells",
    "Llamo a la gente “rica” cuando son capaces de satisfacer las necesidades de su imaginación - El retrato de una dama, Henry James",
    "Luchar hasta el último aliento - Enrique VI, William Shakespeare",
    // Pueden agregar las frases que quieran o crean necesarias
  ];
  fraseActualIndex = 0;

  constructor() {}

  ngOnInit(): void {
    this.mostrarSiguienteFrase();
    setInterval(() => {
      this.mostrarSiguienteFrase();
    }, 10000);
  }

  mostrarSiguienteFrase(): void {
    if (this.fraseActualIndex < this.frases.length) {
      this.fraseActualIndex++;
    } else {
      this.fraseActualIndex = 0;
    }
  }

  get frase(): string {
    return this.frases[this.fraseActualIndex];
  }
}