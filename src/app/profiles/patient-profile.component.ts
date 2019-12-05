import { Component, OnInit } from '@angular/core';
import { PatientService } from '../service/patient.service';
import { Patient } from '../model/Patient';

@Component({
  selector: 'app-patient-profle',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfleComponent implements OnInit {

  constructor(private patientService : PatientService) { }

  private isButtonVisible = false;

  patientUsername : string;
  patient : Patient;
  newPatient : Patient = new Patient();
  firstNameToChange : string;
  lastNameToChange : string;
  cityToChange : string;
  addressToChange: string;
  countryToChange : string;
  mobileNumberToChange : number;

  ngOnInit() {
    this.getPatient();
  }

  getPatient(){
    this.patientUsername = sessionStorage.getItem("authenticatedUser");
    this.patientService.getPatient(this.patientUsername).subscribe(
        data =>{
          this.patient=data;
          console.log(this.patient);
      },
      error => {
      console.log(error);
      }
    )
  }

  change(isButtonVisible:boolean){
    this.isButtonVisible = isButtonVisible;
  }

  change1(isButtonVisible:boolean){
    this.isButtonVisible = isButtonVisible;
    console.log(this.newPatient.firstName);
    if(this.newPatient.firstName === ""){
      this.newPatient.firstName = this.patient.firstName;
    }
    if(this.newPatient.lastName === ""){
      this.newPatient.lastName = this.patient.lastName;
    }
    if(this.newPatient.city === ""){
      this.newPatient.city = this.patient.city;
    }
    if(this.newPatient.country === ""){
      this.newPatient.country = this.patient.country;
    }
    if(this.newPatient.address === ""){
      this.newPatient.address = this.patient.address;
    }
    if(this.newPatient.mobileNumber !== NaN){
      this.newPatient.mobileNumber = this.patient.mobileNumber;
    }

    this.newPatient.username = this.patient.username;
    this.newPatient.password = this.patient.password;
    this.newPatient.email = this.patient.email;
    this.newPatient.jmbg = this.patient.jmbg;

    location.reload();

    this.patientService.changePatientInfo(this.newPatient).subscribe()
  }

}
