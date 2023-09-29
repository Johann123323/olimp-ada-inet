import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { LoginComponent } from './login/login.component';
import { PatientAbmComponent } from './patient-abm/patient-abm.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';


const routes: Routes = [
  {path: "", redirectTo:"login", pathMatch: "full"},
  {path:"login", component:LoginComponent},
  {path:"user-form", component:UserFormComponent},
  {path:"patient-form", component:PatientFormComponent},
  {path:"patient-ABM", component:PatientAbmComponent},
  {path:"recuperar-contraseña", component:RecuperarContrasenaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
