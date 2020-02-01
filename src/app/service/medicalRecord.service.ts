import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicalRecordService {

    constructor(private http: HttpClient) { }

    getAppointments(username : String){
   
        return this.http.get<any>('http://localhost:8080/getAppointments/' + username);
    }

    getAppointmentPatient(username : String, doctor:String){
        return this.http.get<any>('http://localhost:8080/get-patient-appointments/' + username + '/' + doctor);
    }
  
    getSurgeries(username : String){

        return this.http.get<any>('http://localhost:8080/getSurgeries/' + username);
    }

}