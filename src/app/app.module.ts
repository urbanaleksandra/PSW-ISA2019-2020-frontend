import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClinicCenterAdministrator } from './profiles/clinic-center-administrator.component';
import { RouterModule } from '@angular/router';
import { Requests } from './requests/requests.component';
import { Clinic } from './clinic/new-clinic.component';

@NgModule({
  declarations: [
    AppComponent,
    ClinicCenterAdministrator,
    Requests,
    Clinic
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'profileClinicCenterAdmin', component: ClinicCenterAdministrator },
      { path: 'requests', component:  Requests},
      { path: 'new-clinic', component:  Clinic}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
