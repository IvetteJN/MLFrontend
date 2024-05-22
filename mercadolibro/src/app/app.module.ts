import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ShoppingModule } from './shopping.module'; // Ajusta la ruta según tu estructura de archivos

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    ShoppingModule,
    AppComponent,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
