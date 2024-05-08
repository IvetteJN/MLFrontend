import { Component } from '@angular/core';
import { FraseComponent } from '../frase/frase.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [FraseComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
