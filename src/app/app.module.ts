import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClinicCenterAdministrator } from './profiles/clinic-center-administrator.component';
import { RouterModule } from '@angular/router';
import { Requests } from './requests/requests.component';
import { NewClinic } from './clinic/new-clinic.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DoctorComponent } from './profiles/doctor.component';

@NgModule({
  declarations: [
    AppComponent,
    ClinicCenterAdministrator,
    Requests,
    NewClinic,
    LoginComponent,
    RegistrationComponent,
    DoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'profileClinicCenterAdmin', component: ClinicCenterAdministrator },
      { path: 'requests', component:  Requests},
      { path: 'new-clinic', component:  NewClinic},
      { path: 'registration', component:  RegistrationComponent},
      { path: 'doctor', component:  DoctorComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
