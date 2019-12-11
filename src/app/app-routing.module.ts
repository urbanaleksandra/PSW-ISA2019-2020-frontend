import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestComponent } from './requests/requests.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DoctorComponent } from './profiles/doctor.component';
import { DoktorHomePageComponent } from './profiles/doktor-home-page.component';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { ClinicCenterAdministratorComponent } from './profiles/clinic-center-administrator.component';
import { ClinicComponent } from './clinic/clinic.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { PatientProfleComponent } from './profiles/patient-profile.component';
import { NurseHomePageComponent } from './profiles/nurse-home-page/nurse-home-page.component';
import { PatientHomePageComponent } from './profiles/patient-home-page/patient-home-page.component';
import { ClinicsListComponent } from './clinics-list/clinics-list.component';



const routes: Routes = [
      { path: '', component: LoginComponent},
      { path: 'profileClinicCenterAdmin', component: ClinicCenterAdministratorComponent },
      { path: 'requests', component:  RequestComponent},
      { path: 'new-clinic', component:  ClinicComponent},
      { path: 'registration', component:  RegistrationComponent},
      { path: 'login', component:  LoginComponent},
      { path: 'doctor', component:  DoctorComponent},
      { path: 'doctorHomePage', component:  DoktorHomePageComponent},
      { path: 'patients', component:  PatientsListComponent},
      { path: 'nurse-home-page', component:  NurseHomePageComponent},
      { path: 'newAppointment', component:  NewAppointmentComponent},
      { path: 'patient-profile', component:  PatientProfleComponent},
      { path: 'patient-home-page', component:  PatientHomePageComponent},
      { path: 'clinics', component:  ClinicsListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
