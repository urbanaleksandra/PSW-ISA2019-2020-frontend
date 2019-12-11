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
import { AngularMaterialModule } from './angular-material.module';
import { ClinicCenterAdministratorComponent } from './profiles/clinic-center-administrator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ClinicComponent } from './clinic/clinic.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { PatientProfleComponent } from './profiles/patient-profile.component';
import { NurseHomePageComponent } from './profiles/nurse-home-page/nurse-home-page.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchForPatientsComponent } from './search-for-patients/search-for-patients.component';
import { PatientHomePageComponent } from './profiles/patient-home-page/patient-home-page.component';
import { ClinicsListComponent } from './clinics-list/clinics-list.component';

import { HospitalRoomSearchComponent } from './hospital-room-search/hospital-room-search.component';
import { MedicalRecordComponent } from './medical-record/medical-record.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HolidayRequestComponent } from './holiday-request/holiday-request.component';

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
    PatientProfleComponent,
    NurseHomePageComponent,
    SearchForPatientsComponent,
    PatientHomePageComponent,
    ClinicsListComponent,
    HospitalRoomSearchComponent,
    MedicalRecordComponent,
    HolidayRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgbModule,
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
