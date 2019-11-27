import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestComponent } from './requests/requests.component';
import { NewClinic } from './clinic/new-clinic.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ClinicCenterAdministrator } from './profiles/clinic-center-administrator.component';
import { DoctorComponent } from './profiles/doctor.component';


const routes: Routes = [
      { path: 'profileClinicCenterAdmin', component: ClinicCenterAdministrator },
      { path: 'requests', component:  RequestComponent},
      { path: 'new-clinic', component:  NewClinic},
      { path: 'registration', component:  RegistrationComponent},
      { path: 'login', component:  LoginComponent},
      { path: 'doctor', component:  DoctorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
