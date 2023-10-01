import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { LoginComponent } from './login/login.component';
import { PatientAbmComponent } from './patient-abm/patient-abm.component';
import { RecuperarContrasenaComponent } from './recover-password/recuperar-contrasena.component';
import { SingUpComponent } from './sign-up/sing-up.component';
import { DashboardAdmiComponent } from './dashboard-admi/dashboard-admi.component';
import { AreaAbmComponent } from './area-abm/area-abm.component';
import { NurseAbmComponent } from './nurse-abm/nurse-abm.component';
import { NurseFormComponent } from './nurse-form/nurse-form.component';
import { AreaFormComponent } from './area-form/area-form.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { AreaAbmUserComponent } from './area-abm-user/area-abm-user.component';
import { PatientAbmUserComponent } from './patient-abm-user/patient-abm-user.component';
import { NurseAbmUserComponent } from './nurse-abm-user/nurse-abm-user.component';


const routes: Routes = [
  {path: "", redirectTo:"login", pathMatch: "full"},
  {path:"login", component:LoginComponent},
  {path:"user-form", component:UserFormComponent},
  {path:"patient-form", component:PatientFormComponent},
  {path:"patient-abm", component:PatientAbmComponent},
  {path:"patient-abm-user", component:PatientAbmUserComponent},
  {path:"recover-password", component:RecuperarContrasenaComponent},
  {path:"sign-up", component:SingUpComponent},
  {path:"dashboard-admi",component:DashboardAdmiComponent},
  {path:"dashboard-user",component:DashboardUserComponent},
  {path:"area-abm",component:AreaAbmComponent},
  {path:"area-abm-user", component:AreaAbmUserComponent},
  {path:"nurse-abm",component:NurseAbmComponent},
  {path:"nurse-abm-user", component:NurseAbmUserComponent},
  {path:"nurse-form",component:NurseFormComponent},
  {path:"area-form",component:AreaFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
