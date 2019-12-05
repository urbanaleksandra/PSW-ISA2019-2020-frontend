import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { RequestComponent } from './requests/requests.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpInterceptorService } from './login/HttpInterceptorService';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DoctorComponent } from './profiles/doctor.component';
import { DoktorHomePageComponent } from './profiles/doktor-home-page.component';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { ClinicCenterAdministratorComponent } from './profiles/clinic-center-administrator.component';
import { ClinicComponent } from './clinic/clinic.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { PatientProfleComponent } from './profiles/patient-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ClinicCenterAdministratorComponent,
    RequestComponent,
    ClinicComponent ,
    LoginComponent,
    RegistrationComponent,
    DoctorComponent,
    DoktorHomePageComponent,
    PatientsListComponent,
    NewAppointmentComponent,
    PatientProfleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    NgxMaterialTimepickerModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
