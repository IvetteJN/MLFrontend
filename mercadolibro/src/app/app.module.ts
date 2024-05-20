import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoComponent } from '../app/pages/nuestraseleccion/carrito/carrito.component'; // Asegúrate de importar tu componente aquí

@NgModule({
  declarations: [CarritoComponent],
  imports: [
    CommonModule, // Asegúrate de incluir CommonModule aquí
    // Otros módulos necesarios para esta área
  ],
  exports: [CarritoComponent] // Si deseas exportar CarritoComponent para su uso fuera de este módulo
})
export class ShoppingModule { }
