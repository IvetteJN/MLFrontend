import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { NavComponent } from '../../shared/nav/nav.component';

@Component({
  selector: 'app-quienes',
  standalone: true,
  imports: [CommonModule,FooterComponent,NavComponent],
  templateUrl: './quienes.component.html',
  styleUrl: './quienes.component.css'
})
export class QuienesComponent {

}
