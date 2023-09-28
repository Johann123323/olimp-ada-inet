import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';
import { PatientAbmComponent } from './patient-abm/patient-abm.component';
import { DashboardAdmiComponent } from './dashboard-admi/dashboard-admi.component';
const routes: Routes = [
    {path: "", redirectTo: "login", pathMatch: "full"},
    {path:"login", component:LoginComponent},
    {path:"recuperar-contrasena", component: RecuperarContrasenaComponent},
    {path:"patient-abm", component: PatientAbmComponent},
    {path:"dashboard-admi", component: DashboardAdmiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
