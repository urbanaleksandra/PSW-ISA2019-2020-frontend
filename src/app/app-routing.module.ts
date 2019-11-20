import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Requests } from './requests/requests.component';
import { Clinic } from './clinic/new-clinic.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ClinicCenterAdministrator } from './profiles/clinic-center-administrator.component';


const routes: Routes = [
      { path: 'profileClinicCenterAdmin', component: ClinicCenterAdministrator },
      { path: 'requests', component:  Requests},
      { path: 'new-clinic', component:  Clinic},
      { path: 'registration', component:  RegistrationComponent},
      { path: 'login', component:  LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
