import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Appointment } from '../model/Appointment';
import { MedicalRecordService } from '../service/medicalRecord.service';

@Component({
  selector: 'app-medical-record',
  templateUrl: './medical-record.component.html',
  styleUrls: ['./medical-record.component.css']
})
export class MedicalRecordComponent implements OnInit {

  appointments : Appointment[] = [];
  appointments1 : Appointment[] = [];
  appointment : Appointment;
  usernameUlogovanog : string;

  constructor(private router: Router, private service: MedicalRecordService) { }

  ngOnInit() {
    this.getAppointments();
  }

  getAppointments(){
    this.usernameUlogovanog = sessionStorage.getItem("authenticatedUser");
    this.service.getAppointments(this.usernameUlogovanog).subscribe(
      data=>{
        this.appointments=data;
        for(let a of this.appointments){
          console.log(a.patient);
          if(a.patient === this.usernameUlogovanog){
            this.appointments1.push(a);
          }
        }
      }, error =>{
        console.log(error);
      }
    );

    
  }

}
