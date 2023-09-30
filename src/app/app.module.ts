import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';
import { PatientAbmComponent } from './patient-abm/patient-abm.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardAdmiComponent } from './dashboard-admi/dashboard-admi.component';
import { NurseAbmComponent } from './nurse-abm/nurse-abm.component';
import { AreaAbmComponent } from './area-abm/area-abm.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecuperarContrasenaComponent,
    PatientAbmComponent,
    DashboardAdmiComponent,
    NurseAbmComponent,
    AreaAbmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
