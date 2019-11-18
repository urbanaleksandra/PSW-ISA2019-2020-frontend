import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClinicCenterAdministrator } from './profiles/clinic-center-administrator.component';
import { RouterModule } from '@angular/router';
import { Requests } from './requests/requests.component';
import { Clinic } from './clinic/new-clinic.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    ClinicCenterAdministrator,
    Requests,
    Clinic,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'profileClinicCenterAdmin', component: ClinicCenterAdministrator },
      { path: 'requests', component:  Requests},
      { path: 'new-clinic', component:  Clinic},
      { path: 'registration', component:  RegistrationComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
