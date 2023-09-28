import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    contrasena: ['', Validators.required]
  
  });

  constructor(private formBuilder: FormBuilder, private router:Router) 
  {
    
  }

  iniciarSesion()
  {
    if(this.loginForm.valid)
    {
      if(this.loginForm.controls["email"].value == "jk@gmail.com" && 
      this.loginForm.controls["contrasena"].value == "123AF@")
    {
        this.router.navigateByUrl("dashboard-admi")
    }}
    else
    {
      alert("Error al iniciar sesión. Revise los datos requeridos y formatos del email")
    }
  }


}
