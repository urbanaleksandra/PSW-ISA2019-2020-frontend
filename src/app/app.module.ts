import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClinicCenterAdministrator } from './profiles/clinic-center-administrator.component';
import { RouterModule } from '@angular/router';
import { RequestComponent } from './requests/requests.component';
import { NewClinic  } from './clinic/new-clinic.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HttpInterceptorService } from './login/HttpInterceptorService';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DoctorComponent } from './profiles/doctor.component';

@NgModule({
  declarations: [
    AppComponent,
    ClinicCenterAdministrator,
    RequestComponent,
    NewClinic ,
    LoginComponent,
    RegistrationComponent,
    DoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
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
