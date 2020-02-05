import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../model/Patient';
import { Appointment } from '../model/Appointment';
import { AvailableRoom } from '../model/AvailableRoom';


@Injectable({
  providedIn: 'root'
})

export class RequestAppointmentService {

  constructor(private http: HttpClient) { }

  addrequestAppointment(appointment: Appointment) {
    console.log(appointment.description + appointment.date + appointment.duration + appointment.patient + appointment.type)
    return this.http.post<Appointment>('http://localhost:8080/api/add-requestApp', appointment)
  }
  addrequestAppointmentF(appointment: Appointment) {
    console.log(appointment.clinic.id, appointment.description + appointment.date + appointment.duration + appointment.patient + appointment.type)
    return this.http.post<Appointment>('http://localhost:8080/api/add-requestAppFAST/'+sessionStorage.getItem("authenticatedUser"), appointment)
  }

  getAvailableRoomForOtherDate(appointment: Object){
    console.log('usao u getAvailableRoomForOtherDate');
    console.log(appointment);
    return this.http.post<AvailableRoom>('http://localhost:8080/api/available-room-other-date-Appointment', appointment);
  }

  getSurgeriesService() {
    console.log("usao");
    return this.http.get<any>('http://localhost:8080/api/appointments-res-rooms/' + sessionStorage.getItem('authenticatedUser'));
  }

  setRoom( appointment: Appointment){
    return this.http.post<any>('http://localhost:8080//api/add-room-app',appointment );
  }

  setRoomOfFastAppointment(resRoom: Object){
    console.log("usao u setRoomOfSurgery");
    console.log(resRoom);
    return this.http.post('http://localhost:8080/api/add-room-to-appointmentF', resRoom);
  }

  addrequestAppointmentFromPatient(appointment: Appointment) {
    console.log(appointment.description)
    return this.http.post<Patient>('http://localhost:8080/api/add-requestApp-from-patient', appointment)
  }

  getAvailableRooms(appointment: Object) {
    console.log("getAvailableRooms");
    return this.http.post<any>('http://localhost:8080/api/availableRoomsAppointment', appointment);
  }

  getAllRooms() {
    return this.http.get<any>('http://localhost:8080/sale');
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