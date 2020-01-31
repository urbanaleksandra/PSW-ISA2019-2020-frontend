import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicalRecordService } from '../service/medicalRecord.service';
import { Surgery } from '../model/Surgery';
import { Appointment } from '../model/Appointment';
import { Sort } from '@angular/material/sort';
import { Doctor } from '../model/Doctor';

@Component({
  selector: 'app-history-of-appointments',
  templateUrl: './history-of-appointments.component.html',
  styleUrls: ['./history-of-appointments.component.css']
})
export class HistoryOfAppointmentsComponent implements OnInit {

  appointments : Appointment[] = [];
  appointments1 : Appointment[] = [];
  appointment : Appointment;
  usernameUlogovanog : string;
  doctorsForRate : Doctor[] = [];

  surgeries : Surgery[] = [];
  surgeries1 : Surgery[] = [];
  surgery : Surgery;

  constructor(private router: Router, private service: MedicalRecordService) { }

  ngOnInit() {
    this.getAppointments();
    this.getSurgeries();
    this.getDoctorsForRate();
  }

  doSomething(doctor:Doctor){
    console.log(doctor.firstName);
    console.log(doctor.review);
  }

  getDoctorsForRate(){
    this.usernameUlogovanog = sessionStorage.getItem("authenticatedUser");
    this.service.getDoctorsForRate(this.usernameUlogovanog).subscribe(
      data=>{
        this.doctorsForRate=data;
      }, error =>{
        console.log(error);
      }
    );
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

  getSurgeries(){
    this.usernameUlogovanog = sessionStorage.getItem("authenticatedUser");
    this.service.getSurgeries(this.usernameUlogovanog).subscribe(
      data=>{
        this.surgeries=data;
        for(let a of this.surgeries){
          console.log(a.patient);
          if(a.patient === this.usernameUlogovanog){
            this.surgeries1.push(a);
          }
        }
      }, error =>{
        console.log(error);
      }
    );
  }

  sortData(sort: Sort) {
    const data = this.appointments1.slice();
    if (!sort.active || sort.direction === '') {
      this.appointments1 = data;
      return; 
    }
   
    this.appointments1 = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'date': return compare(a.date, b.date, isAsc);
        case 'description': return compare(a.description, b.description, isAsc);
        case 'duration': return compare(a.duration, b.duration, isAsc);
        case 'type': return compare(a.type, b.type, isAsc);
        default: return 0;
      }

 
      });
    }

    sortData1(sort: Sort) {
      const data = this.surgeries1.slice();
      if (!sort.active || sort.direction === '') {
        this.surgeries1 = data;
        return; 
      }
     
      this.surgeries1 = data.sort((a, b) => {
        const isAsc = sort.direction === 'asc';
        switch (sort.active) {
          case 'date': return compare(a.date, b.date, isAsc);
          case 'description': return compare(a.description, b.description, isAsc);
          default: return 0;
        }
  
   
        });
      }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


