
import { Component } from '@angular/core';

@Component({
  selector: 'app-quienes',
  standalone: true,
  imports: [],
  templateUrl: './quienes.component.html',
  styleUrl: './quienes.component.css'
})
export class QuienesComponent {
  parrafo_quienes_somos:string=`tu destino literario preferido donde las palabras cobran vida y la
  imaginación se desborda.
  Somos mucho más que una tienda de libros;
  somos un refugio para los amantes de la lectura y un faro para aquellos que buscan descubrir nuevas historias
  y mundos por explorar.`;
  parrafo_nuestra_seleccion:string= `Nuestra cuidadosa selección de libros abarca desde clásicos intemporales hasta las
  obras más contemporáneas y vanguardistas. Encontrarás un rincón para cada género: desde la fantasía épica
  hasta
  la poesía lírica, desde los misterios más oscuros hasta las historias de amor más conmovedoras.
  Cada libro que ofrecemos ha sido elegido con el compromiso de proporcionar experiencias de lectura
  enriquecedoras.`;
  parrafo_nuestra_pasion:string=`la pasión por la literatura fluye en nuestras venas.
  Desde el momento en que abrimos nuestras puertas virtuales, nos hemos dedicado a compartir el amor por la
  lectura
  y a celebrar la diversidad de voces y géneros literarios. Creemos que los libros tienen el poder de
  transformar vidas
  y abrir puertas a innumerables aventuras.`;

  parrafo_nuestro_compromiso:string=`valoramos profundamente a nuestros clientes y su amor por la
  lectura.
  Nos comprometemos a brindar un servicio excepcional, recomendaciones personalizadas y una experiencia de
  compra
  en línea sin igual. Además, nos esforzamos por apoyar a autores emergentes y pequeñas editoriales para dar
  vida
  a nuevas voces literarios.`;
  
  
}
