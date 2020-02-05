import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from '../service/appointment.service';
import { Appointment } from '../model/Appointment';

@Component({
  selector: 'app-already-created-appointments',
  templateUrl: './already-created-appointments.component.html',
  styleUrls: ['./already-created-appointments.component.css']
})
export class AlreadyCreatedAppointmentsComponent implements OnInit {

  appointments: Appointment[] = [];
  usernameUlogovanog: string;

  constructor(private router: Router, private appService: AppointmentService) { }

  ngOnInit() {
    this.getAlreadyCreatedAppointments();

  }

  getAlreadyCreatedAppointments(){
    this.appService.getAlreadyCreatedAppointments().subscribe(
      data =>{
          this.appointments=data;
      },
      error => {
      console.log(error);
      }
     )

  }


  scheduleApp(app:Appointment){
    this.usernameUlogovanog = sessionStorage.getItem("authenticatedUser");
    app.patient = this.usernameUlogovanog;


    this.appService.scheduleApp(app).subscribe(
      data=>{
        alert("Successfully scheduled appointment.");
        this.router.navigateByUrl("/patient-home-page");
    }, error =>{
        console.log(error);
    }
    );

    
  }

}
