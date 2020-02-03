import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PatientRatedDoctor } from '../model/PatientRatedDoctor';
import { PatientRatedClinic } from '../model/PatientRatedClinic';

@Injectable({
  providedIn: 'root'
})
export class MedicalRecordService {

    constructor(private http: HttpClient) { }

    getAppointments(username : String){
   
        return this.http.get<any>('http://localhost:8080/getAppointments/' + username);
    }
    getAllAppointments(username){
   
        return this.http.get<any>('http://localhost:8080/api/all-patient-appointment/' + username);
    }

    getAppointmentPatient(username : String, doctor:String){
        return this.http.get<any>('http://localhost:8080/get-patient-appointments/' + username + '/' + doctor);
    }
  
    getAppointmentsMR(username : String){
   
        return this.http.get<any>('http://localhost:8080/getAppointmentsMR/' + username);
    }

    getSurgeries(username : String){

        return this.http.get<any>('http://localhost:8080/getSurgeries/' + username);
    }

    getDoctorsForRate(username : String){
        return this.http.get<any>('http://localhost:8080/getDoctorsForRate/' + username);
    }

    getRate(username : String){
        return this.http.get<any>('http://localhost:8080/getRate/' + username);
    }

    getClinicsForRate(username : String){
        return this.http.get<any>('http://localhost:8080/getClinicsForRate/' + username);
    }

    rateChange(prd: PatientRatedDoctor){ //ocenjivanje doktora
        return this.http.post('http://localhost:8080/rateChange', prd);
      }

    rateChange1(prclinic: PatientRatedClinic){ //ocenjivanje klinika
    return this.http.post('http://localhost:8080/rateChangeClinic', prclinic);
    }

}