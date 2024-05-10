import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  loginFormulario = new FormGroup({
    usuario: new FormControl(''),
    contrasenia: new FormControl(''),
  })
  
  enviarDatosLogin():void{
    console.log(this.loginFormulario.value);
  }

  registroFormulario = new FormGroup({
    usuarioRegistro: new FormControl(''),
    email: new FormControl(''),
    contraseniaRegistro: new FormControl(''),
    repetirContrasenia: new FormControl(''),
  })

  enviarDatosRegistro():void{
    console.log(this.registroFormulario.value);
  }
}
