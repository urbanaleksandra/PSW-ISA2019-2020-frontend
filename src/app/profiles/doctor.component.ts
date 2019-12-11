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
        this.isButtonVisible = isButtonVisible;
      }

      change2(isButtonVisible2:boolean){
        this.isButtonVisible2 = isButtonVisible2;
      }
}

