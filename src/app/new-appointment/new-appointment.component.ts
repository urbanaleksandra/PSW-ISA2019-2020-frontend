import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { Appointment } from '../model/Appointment';


@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['../clinic/clinic.component.css']
})
export class NewAppointmentComponent implements OnInit {
  appointment: Appointment = new Appointment();
  constructor() { }

  ngOnInit() {
  }

}
