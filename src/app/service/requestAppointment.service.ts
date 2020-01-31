import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../model/Patient';
import { Appointment } from '../model/Appointment';


@Injectable({
    providedIn: 'root'
  })

export class RequestAppointmentService{

    constructor(private http: HttpClient) { }

    addrequestAppointment(appointment : Appointment){
        console.log(appointment.description+appointment.date+appointment.duration+appointment.patient+appointment.type)
        return this.http.post<Patient>('http://localhost:8080/api/add-requestApp', appointment)
      }


    addrequestAppointmentFromPatient(appointment : Appointment){
    console.log(appointment.description)
    return this.http.post<Patient>('http://localhost:8080/api/add-requestApp-from-patient', appointment)
    }

/*     getRequest(){
        return this.http.get<Patient[]>('http://localhost:8080/api/requests');
    }

    deleteRequest(patient: Patient){
        return this.http.post('http://localhost:8080/api/deny-request', patient);

    } 

    acceptRequest(patient: Patient){
        return this.http.post('http://localhost:8080/api/accept-request', patient);

    }

    sendMessage(message: String, email: string){
        return this.http.post('http://localhost:8080/api/deny-request-message/'+ email, message);
    } */
}