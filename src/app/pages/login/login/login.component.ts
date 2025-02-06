import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule} from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  router = inject(Router);

  formularioLogin: any = {
    mail: '',
    password: ''
  }
  
  onLogin(){
    const isLocalData = localStorage.getItem("registroLocalnuevo");
    if (isLocalData != null){
      const usuarios = JSON.parse(isLocalData);
      const isUsuarioEncontrado = usuarios.find((m:any) => m.mail == this.formularioLogin.mail && m.password == this.formularioLogin.password)
      if (isUsuarioEncontrado != undefined){
        this.router.navigateByUrl('dashboard');
      }
      else{
        alert("Usuario o contraseña erróneos");
      }
    }
    else{
      alert("Usuario no encontrado");
    }
}
}
