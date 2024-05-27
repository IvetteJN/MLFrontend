import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromocionesService {
  private detalleOfertas: any;

  constructor() {
    this.detalleOfertas = [];
   }

   informacionOferta1():string{
    return 'Disfruta de pagar con 3, 5 o 6 cuotas sin interés con Tarjeta Naranja. Promoción valida hasta el 30/06/2024 inclusive.'
   }
   informacionOferta2():string{
    return '20% descuento exclusivo para miembros de Club La Nación, en compras mayores a 20.000 pesos. Promoción valida hasta el 31/12/2024 inclusive.'
   }
  informacionOferta3():string{
    return '20% descuento exclusivo para miembros de Club La Voz, en compras mayores a 20.000 pesos. Promoción valida hasta el 31/12/2024 inclusive.'
  }
  informacionOferta4():string{
    return 'Envió gratis a domicilio o puntos de entrega en cualquier ciudad dentro del territorio nacional que se encuentre dentro de la red de entrega de Correo Argentino. Solo aplicable en compras con un valor igual o superior a 40.000 pesos. Promoción valida hasta el 31/12/2024 inclusive.'
  }
  informacionOferta5():string{
    return 'Aprovecha la oportunidad de comprar  tus novelas favoritas con un descuento del 15%. Descuento aplicable a todos los libros que se encuentren dentro de la categoría novelas. Promoción valida hasta el 30/06/2024 inclusive.'
  }
  informacionOferta6():string{
    return 'Aprovecha todas las semanas de comprar un libro de nuestra selección con un increíble descuento. No dejes pasar esta oportunidad de llevarte a tu casa clásicos de la literatura, best seller y mucha mas. Promoción valida hasta el 09/06/2024 inclusive.'
  }


   guardarInformacionOfertas():any{
    return this.detalleOfertas = [
      this.informacionOferta1(),
      this.informacionOferta2(),
      this.informacionOferta3(),
      this.informacionOferta4(),
      this.informacionOferta5(),
      this.informacionOferta6()

    ]
   }
}
