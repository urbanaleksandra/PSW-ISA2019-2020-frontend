import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClinicCenterAdministrator } from './profiles/clinic-center-administrator.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ClinicCenterAdministrator
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'profileClinicCenterAdmin', component: ClinicCenterAdministrator },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
