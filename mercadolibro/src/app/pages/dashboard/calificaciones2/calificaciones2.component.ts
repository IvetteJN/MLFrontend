import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Review {
  name: string;
  location: string;
  date: Date;
  content: string;
  photo: string;
}

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './calificaciones2.component.html',
  styleUrls: ['./calificaciones2.component.css']
})
export class ReviewsComponent {
  reviews: Review[] = [
    {
      name: 'Laura Manyla',
      location: 'Mendoza, Argentina',
      date: new Date('2023-05-17'),
      content: 'Compré varios libros y hasta ahora el proceso fue rápido y en los plazos estipulados.',
      photo: 'assets/Imagenes/1 feliz.jpg'
    },
    {
      name: 'Lionela Messi',
      location: 'LA CALERA, Argentina',
      date: new Date('2023-05-17'),
      content: 'todo bien, perfecta la entrega, muy feliz',
      photo: 'assets/Imagenes/2 feliz.jpg'
    },
    {
      name: 'Mili Bonaparte',
      location: 'Cordoba, Argentina',
      date: new Date('2022-06-17'),
      content: 'Compré varios libros no me mandaron niguno todavia..',
      photo: 'assets/Imagenes/3 feliz.jpg'
    },
    {
      name: 'Lionel Messi',
      location: 'Paris, Francia',
      date: new Date('2023-05-17'),
      content: 'Excelente como siempre. Fácil de comprar, claridad en el proceso, y cumplimiento en la forma y tiempo de envío. ¡Muchas gracias!',
      photo: 'assets/Imagenes/4 feliz.jpg'
    },
    // Agrega más opiniones aquí
  ];
}
