import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestComponent } from './requests/requests.component';
import { NewClinic } from './clinic/new-clinic.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ClinicCenterAdministrator } from './profiles/clinic-center-administrator.component';
import { DoctorComponent } from './profiles/doctor.component';
import { DoktorHomePageComponent } from './profiles/doktor-home-page.component';
import { PatientsListComponent } from './patients-list/patients-list.component';


const routes: Routes = [
      { path: 'profileClinicCenterAdmin', component: ClinicCenterAdministrator },
      { path: 'requests', component:  RequestComponent},
      { path: 'new-clinic', component:  NewClinic},
      { path: 'registration', component:  RegistrationComponent},
      { path: 'login', component:  LoginComponent},
      { path: 'doctor', component:  DoctorComponent},
      { path: 'doctorHomePage', component:  DoktorHomePageComponent},
      { path: 'patients', component:  PatientsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
