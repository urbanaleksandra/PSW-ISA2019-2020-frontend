import { Component, OnInit } from '@angular/core';
import { NgModule }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Patient } from '../model/Patient';
import { Router } from '@angular/router';
import { PatientService } from '../service/patient.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,                               
    ReactiveFormsModule                        
  ],
  declarations: [
    RegistrationComponent
    // other components of yours
  ],
  bootstrap: [ RegistrationComponent ]
})

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  patient : Patient = new Patient();


  constructor(private patientService : PatientService, private router : Router) { }

  registrationClick(){
    this.patientService.register(this.patient).subscribe(
      
    );
  }

  ngOnInit() {
  }

  private isButtonVisible = true;

  change(isButtonVisible:boolean){
    this.isButtonVisible = isButtonVisible;
  }

}
