import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { LoginComponent } from './login/login.component';
import { PatientAbmComponent } from './patient-abm/patient-abm.component';
import { RecuperarContrasenaComponent } from './recover-password/recuperar-contrasena.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/navbarIS/navbar.component';
import { NavbarRComponent } from './shared/navbarR/navbar-r.component';
import { SingUpComponent } from './sign-up/sing-up.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PatientFormComponent,
    UserFormComponent,
    LoginComponent,
    PatientAbmComponent,
    RecuperarContrasenaComponent,
    NavbarComponent,
    NavbarRComponent,
    SingUpComponent,
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
