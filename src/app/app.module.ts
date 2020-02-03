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
import { CalendarComponent } from './calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { LogoutComponent } from './logout/logout.component';
import { HistoryOfAppointmentsComponent } from './history-of-appointments/history-of-appointments.component';
import { RequestHolidayViewComponent } from './request-holiday-view/request-holiday-view.component';
import { ClinicAdminHomePageComponent } from './profiles/clinic-admin-home-page/clinic-admin-home-page.component';
import { NewRoomComponent } from './new-room/new-room.component';
import { AuthRecipeComponent } from './auth-recipe/auth-recipe.component';
import { CdkTableModule } from '@angular/cdk/table';
import { AppointmentTypesComponent } from './appointment-types/appointment-types.component';
import { SurgeryHospitalRoomComponent } from './surgery-hospital-room/surgery-hospital-room.component';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';
import { DoctorsSearchComponent } from './doctors-search/doctors-search.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { ClinicAdminProfileComponent } from './clinic-admin-profile/clinic-admin-profile.component';
import { PatientCreateAppointmentComponent } from './patient-create-appointment/patient-create-appointment.component';
import { SurgeryRoomService } from './service/surgery-room.service';
import { PopUpDoctorsComponent } from './pop-up-doctors/pop-up-doctors.component';
import { NewSurgeryComponent } from './new-surgery/new-surgery.component';
import { AppointmentReportComponent } from './appointment-report/appointment-report.component';
import { DialogPriceComponent } from './dialog-price/dialog-price.component';
import { ClinicProfileComponent } from './clinic-profile/clinic-profile.component';
import { HolidayRequestsComponent } from './holiday-requests/holiday-requests.component';
import { AdminReportsComponent } from './admin-reports/admin-reports.component';
import { ChartsModule } from 'ng2-charts';



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
    HolidayRequestComponent,
    CalendarComponent,
    LogoutComponent,
    HistoryOfAppointmentsComponent,
    RequestHolidayViewComponent,
    ClinicAdminHomePageComponent,
    NewRoomComponent,
    ClinicAdminHomePageComponent,
    AuthRecipeComponent,
    SurgeryHospitalRoomComponent,
    DoctorsListComponent,
    AppointmentTypesComponent,
    SurgeryHospitalRoomComponent,
    DoctorsSearchComponent,
    AddDoctorComponent,
    ClinicAdminProfileComponent,
    PatientCreateAppointmentComponent,
    PopUpDoctorsComponent,
    NewSurgeryComponent,
    AppointmentReportComponent,
    ClinicProfileComponent,
    DialogPriceComponent,
    HolidayRequestsComponent,
    AdminReportsComponent,
    



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
    ReactiveFormsModule,
    FullCalendarModule,
    CdkTableModule,
    ChartsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true

    }
  ],
  bootstrap: [AppComponent],
  entryComponents:[PopUpDoctorsComponent,DialogPriceComponent],

})
export class AppModule { }
