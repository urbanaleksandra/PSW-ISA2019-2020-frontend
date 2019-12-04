import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { Appointment } from '../model/Appointment';
import { FormBuilder } from '@angular/forms';
import { Patient } from '../model/Patient';
import { PatientService } from '../service/patient.service';
import { RequestAppointmentService } from '../service/requestAppointment.service';


@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['../clinic/clinic.component.css']
})
export class NewAppointmentComponent implements OnInit {
  appointment: Appointment = new Appointment();
  constructor(public fb: FormBuilder,private service : PatientService,private rAservice: RequestAppointmentService) { }
  patients: Patient[];
 

  patientsForm = this.fb.group({
    name: ['']
  })

  onSubmit() {

    alert(JSON.stringify(this.appointment.date))
   // alert(this.appointment.patient)
    alert(this.appointment.description)
    this.rAservice.addrequestAppointment(this.appointment).subscribe(
      (result)=> {
        console.log('radi ');
      }
    );
  }

  ngOnInit() : void {
    this.getPatients();
  }
    getPatients(){
      this.service.getAllPatients().subscribe(
          data=>{
              this.patients=data;
          }, error =>{
              console.log(error);
          }
      )
  
} }
