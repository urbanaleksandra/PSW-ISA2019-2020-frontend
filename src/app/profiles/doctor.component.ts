import { Component } from "@angular/core";
import { User } from '../model/User';
import { Doctor } from '../model/Doctor';
import { PatientService } from '../service/patient.service';

@Component({
    templateUrl: './doctor.component.html',
    styleUrls: ['./clinic-center-administrator.component.css']
})

export class DoctorComponent{
    user:User=new User() ;
    doctor: Doctor=new Doctor();
    newDoctor: Doctor= new Doctor();
    constructor(private patientService : PatientService) { }

    ngOnInit() {
     this.getDoctor();
      
    }
  
    private isButtonVisible = false;

    private isButtonVisible2 = false;

    getDoctor(){
      this.user.username = sessionStorage.getItem("authenticatedUser");
      this.patientService.getDoctor(this.user.username).subscribe(
        data =>{
          this.doctor=data;
          console.log(this.doctor);
      },
      error => {
      console.log(error);
      }
    )
    }

    change(isButtonVisible:boolean){
      if(this.isButtonVisible==false)
      this.isButtonVisible=true;
      else this.isButtonVisible=false;
      }

      change2(isButtonVisible2:boolean){

        if(this.isButtonVisible2==false)
        this.isButtonVisible2=true;
        else this.isButtonVisible2=false;
      
      }

      submitNewInfo(){
        this.isButtonVisible2=false;
        console.log(this.newDoctor.firstName);
        if(this.newDoctor.firstName === ""){
          this.newDoctor.firstName = this.doctor.firstName;
        }
        /* if(this.newPatient.lastName === ""){
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
        } */
    
        this.newDoctor.username = this.doctor.username;
    
        location.reload();
    
        this.patientService.changeDoctorInfo(this.newDoctor).subscribe()
      }
}

