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
    console.log(this.patient.address);
    console.log(this.patient.city);
    console.log(this.patient.country);  console.log(this.patient.email);  console.log(this.patient.firstName);
    console.log(this.patient.jmbg);  console.log(this.patient.lastName);  console.log(this.patient.mobileNumber);
    console.log(this.patient.password);  console.log(this.patient.username);
    this.patientService.register(this.patient).subscribe(
      (result)=> {
        console.log('radi register');
      }
    );
  }

  ngOnInit() {
  }

  private isButtonVisible = true;

  change(isButtonVisible:boolean){
    this.isButtonVisible = isButtonVisible;
  }

}
