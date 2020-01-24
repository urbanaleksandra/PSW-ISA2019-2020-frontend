import { Component, OnInit } from '@angular/core';
import { ClinicService } from '../service/clinic.service';
import { Doctor } from '../model/Doctor';
import { Appointment } from '../model/Appointment';
import { RequestAppointmentService } from '../service/requestAppointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-create-appointment',
  templateUrl: './patient-create-appointment.component.html',
  styleUrls: ['./patient-create-appointment.component.css']
})
export class PatientCreateAppointmentComponent implements OnInit {

  imeKlinike: string;
  datumZakazivanja: string;
  vremeZakazivanja: string;
  doctor: Doctor;
  appointment: Appointment = new Appointment();
  usernameUlogovanog: string;

  constructor(private clinicService: ClinicService, private rAservice: RequestAppointmentService, private router: Router) { }

  ngOnInit() {
    this.usernameUlogovanog = sessionStorage.getItem("authenticatedUser");
    this.imeKlinike = this.clinicService.imeKlinike1;
    this.datumZakazivanja = this.clinicService.datumZakazivanja1;
    this.vremeZakazivanja = this.clinicService.vremeZakazivanja;
    this.doctor = this.clinicService.doctor;
    //this.doctor.clinic = this.clinicService.clinic;
    //this.appointment.doctor = this.doctor; //napraviti u appointDTO string doctor i ovako prosledim dovtorov username, i ovde u apointment modelu stavim string doctor username kao patient
    this.appointment.date = this.datumZakazivanja + "T" + this.vremeZakazivanja;
    this.appointment.patient = this.usernameUlogovanog;
    this.appointment.type = "bla";
    
    console.log(this.appointment.patient);
  }

  onSubmit(){

  }

}
