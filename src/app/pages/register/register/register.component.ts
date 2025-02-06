import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  resultado!: string;
  isRegistrationView: boolean = false;
  isLoginView: boolean = false;

  formularioRegistro: any = {
    nombre: '',
    mail:'',
    password: ''
  }

  submit() {
    if (this.formularioRegistro.valid){
      this.resultado = "Todos los datos son válidos";
      this.onRegister();
    }
    else{
      this.resultado = "Hay datos inválidos en el formulario";
    }
  }

  onRegister(){
    const isLocalData = localStorage.getItem("registroLocalnuevo");
    if (isLocalData != null){
      const localArray = JSON.parse(isLocalData);
      localArray.push(this.formularioRegistro);
      localStorage.setItem("registroLocalnuevo",JSON.stringify(localArray))
    }else {
      const localArray = [];
      localArray.push(this.formularioRegistro);
      localStorage.setItem("registroLocalnuevo",JSON.stringify(localArray))
    }
    alert("Registro hecho.")
  }
}
