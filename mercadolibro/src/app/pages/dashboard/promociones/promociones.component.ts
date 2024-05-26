import { Component } from '@angular/core';
import { PromocionesService } from '../../../services/promociones.service';

@Component({
  selector: 'app-promociones',
  standalone: true,
  imports: [],
  templateUrl: './promociones.component.html',
  styleUrl: './promociones.component.css'
})
export class PromocionesComponent {
  constructor(private promocionesService: PromocionesService){
    this.informacionPromocion1 = this.promocionesService.informacionOferta1();
    this.informacionPromocion2 = this.promocionesService.informacionOferta2();
    this.informacionPromocion3 = this.promocionesService.informacionOferta3();
    this.informacionPromocion4 = this.promocionesService.informacionOferta4();
    this.informacionPromocion5 = this.promocionesService.informacionOferta5();
    this.informacionPromocion6 = this.promocionesService.informacionOferta6();
  }

  informacionPromocion1:string;
  informacionPromocion2:string;
  informacionPromocion3:string;
  informacionPromocion4:string;
  informacionPromocion5:string;
  informacionPromocion6:string;
  

}
